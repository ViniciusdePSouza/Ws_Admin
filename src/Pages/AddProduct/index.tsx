import { useEffect, useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import {
  ButtonClose,
  Container,
  Form,
  FormValidatorAdvisor,
  PriceTagWrapper,
  Select,
} from "./styles";
import { X } from "@phosphor-icons/react";
import { TagsProps } from "../../@types/tags";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/Button";
import { ProductsProps } from "../../@types/products";
import { useNavigate } from "react-router-dom";

const newProductSchema = z.object({
  name: z.string().nonempty('Field is required'),
  description: z.string().nonempty('Field is required'),
  price: z.string().nonempty('Field is required'),
  tag: z.string().nonempty('Field is required'),
});

type NewProductFormData = z.infer<typeof newProductSchema>;

export function AddProduct() {
  const [allTags, setAllTags] = useState<TagsProps[]>([]);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<NewProductFormData>({
    resolver: zodResolver(newProductSchema),
  });

  function handleClose(){
    navigate(-1)
  }

  async function fetchAllTags() {
    const response = await api.get("/tags");

    return response;
  }

  async function handleCreateNewProduct({
    name,
    tag,
    description,
    price,
  }: NewProductFormData) {

    const newProduct: ProductsProps = {
      name,
      tag: Number(tag),
      description,
      price: Number(price),
      photo: "https://picsum.photos/100/200",
    };

    try {
      await api.post("/products", newProduct);

      alert("Congratulations! New product created");

      navigate("/home");
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

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleCreateNewProduct)}>
        <ButtonClose type='button' onClick={handleClose}>
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

        <Button type="submit" title={"Create"} isLoading={isSubmitting} />
      </Form>
    </Container>
  );
}
