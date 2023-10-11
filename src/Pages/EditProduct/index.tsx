import { X } from "@phosphor-icons/react";

import {
  ButtonClose,
  Container,
  Form,
  FormValidatorAdvisor,
  PriceTagWrapper,
  Select,
} from "./styles";

import TextArea from "../../components/TextArea";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductsProps } from "../../@types/products";
import { api } from "../../services/api";
import { ProductType } from "../../@types/productsType";
import { TagsProps } from "../../@types/tags";

const editProductSchema = z.object({
  name: z.string().nonempty("Field is required"),
  description: z.string().nonempty("Field is required"),
  price: z.string().nonempty("Field is required"),
  tag: z.string().nonempty("Field is required"),
});

type EditProductFormData = z.infer<typeof editProductSchema>;

export function EditProduct() {
  const [product, setProduct] = useState<ProductType>({} as ProductType);
  const [allTags, setAllTags] = useState<TagsProps[]>([]);

  const navigate = useNavigate();
  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue
  } = useForm<EditProductFormData>({
    resolver: zodResolver(editProductSchema),
  });

  function handleClose() {
    navigate(-1);
  }

  async function fetchAllTags() {
    const response = await api.get("/tags");

    return response;
  }

  async function handleEditProduct({
    name,
    description,
    price,
    tag,
  }: EditProductFormData) {

    const productUpdated: ProductsProps = {
        name,
        tag: Number(tag),
        description,
        price: Number(price),
        photo: "https://picsum.photos/100/200",
    };

    try {
      await api.put(`products/${product.id}`, productUpdated);

      alert('Product succefully updated ');

      navigate('/home');
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function populateAllTags() {
      const response = await fetchAllTags();
      console.log(response.data)
      setAllTags(response.data);

    }

    populateAllTags();
  }, []);

  useEffect(() => {
    async function fetchEventDetails() {
      const response = await api.get(`/products?id=${params.id}`);
      const productsDetails = response.data[0];
      setProduct(productsDetails);
    }

    fetchEventDetails();
  }, []);

  useEffect(() => {
    if (product) {
      setValue("name", product.name);
      setValue("description", product.description);
      setValue("price", product.price);
      setValue("tag", product.tag);
    }
  }, [product, setValue]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleEditProduct)}>
        <ButtonClose type="button" onClick={handleClose}>
          <X size={32} />
        </ButtonClose>
        <h1>New Product</h1>

        <Input placeholder="Insert the product's name" {...register("name")} />
        <FormValidatorAdvisor>
          {errors.name ? errors.name?.message : ""}
        </FormValidatorAdvisor>
        <TextArea
          placeholder="Insert the product's description"
          {...register("description")}
        />
        <FormValidatorAdvisor>
          {errors.description ? errors.description?.message : ""}
        </FormValidatorAdvisor>

        <PriceTagWrapper>
          <Input
            type="number"
            placeholder="Insert the product's price"
            {...register("price")}
          />
          <FormValidatorAdvisor>
            {errors.price ? errors.price?.message : ""}
          </FormValidatorAdvisor>
          <Select aria-label="Tag do produto" {...register("tag")}>
            <option>Select a tag for the product</option>
            {allTags.length > 0
              ? allTags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.description}
                  </option>
                ))
              : ""}
          </Select>
          <FormValidatorAdvisor>
            {errors.tag ? errors.tag?.message : ""}
          </FormValidatorAdvisor>
        </PriceTagWrapper>

        <Button type="submit" title={"Update"} isLoading={isSubmitting} />
      </Form>
    </Container>
  );
}
