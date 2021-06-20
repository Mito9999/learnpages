import type { NextPage } from "next";
import Head from "next/head";
import {
  Heading,
  Flex,
  InputRightElement,
  Text,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Tag,
  TagCloseButton,
  TagLabel,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Create: NextPage = () => {
  const toast = useToast();

  const [isLoadingPostRequest, setIsLoadingPostRequest] =
    useState<boolean>(false);

  const submitPage = async () => {
    setIsLoadingPostRequest(true);

    try {
      const formObject = {
        title: formData.title,
        uid: formData.uid,
        image: formData.image,
        tags: formData.tags,
        cost: Number(formData.cost),
        hours: Number(formData.hours),
      };

      const res = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      const data = await res.json();
      console.log(data);

      res.ok
        ? toast({
            title: "Submitted page for approval!",
            description:
              "You may edit this page at any time through the edit page.",
            status: "success",
          })
        : toast({
            title: "Failed to submit page!",
            description: "Make sure all inputs are complete. Please try again.",
            status: "warning",
          });
    } catch {
      toast({
        title: "An unknown error has occured!",
        description: "We don't know what happened. Please try again.",
        status: "error",
      });
    }

    setIsLoadingPostRequest(false);
  };

  type FormData = {
    title: string;
    uid: string;
    image: string;
    tag: string;
    tags: string[];
    cost: string; // cast to number
    hours: string; // cast to number
  };

  const [formData, setFormData] = useState<FormData>({
    title: "",
    uid: "",
    image: "",
    tag: "",
    tags: [],
    cost: "",
    hours: "",
  });

  const handleFormDataChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTag = () => {
    setFormData((prev) => ({
      ...prev,
      tags: [...prev.tags, prev.tag],
      tag: "",
    }));
  };

  const removeTag = (text: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tagText) => tagText !== text),
    }));
  };

  return (
    <>
      <Head>
        <title>Learnpages - Create a page</title>
        <meta
          name="description"
          content="Easily create a shareable guide for learning new things."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Box mb={["20px", "50px"]}>
          <Heading mb="20px" size="lg">
            Create a New Page
          </Heading>
          <Flex direction={["column", "row"]}>
            <FormControl>
              <FormLabel>Page Title</FormLabel>
              <Input
                type="text"
                placeholder="Learn VSCode Shortcuts"
                id="page-title-input"
                name="title"
                value={formData.title}
                onChange={handleFormDataChange}
              />
              <FormHelperText>Try to be unique and creative</FormHelperText>
            </FormControl>
            <Spacer m="10px" />
            <FormControl>
              <FormLabel>URL</FormLabel>
              <InputGroup>
                <InputLeftAddon>/</InputLeftAddon>
                <Input
                  type="text"
                  placeholder="vscode"
                  value={formData.uid}
                  name="uid"
                  onChange={handleFormDataChange}
                />
              </InputGroup>
              <FormHelperText>
                https://learnpages.vercel.app/learn/
                <span style={{ fontWeight: 700 }}>
                  {formData.uid.length > 0 ? formData.uid : "vscode"}
                </span>
              </FormHelperText>
            </FormControl>
          </Flex>
        </Box>

        <Box mb="20px">
          <Flex direction={["column", "column", "row"]}>
            <Flex flex="2">
              <FormControl mb={["20px", "0px"]}>
                <FormLabel>Cover Image URL</FormLabel>
                <Input
                  type="text"
                  placeholder="https://code.visualstudio.com/opengraphimg/opengraph-home.png"
                  name="image"
                  value={formData.image}
                  onChange={handleFormDataChange}
                />
                <FormHelperText>High quality and expressive</FormHelperText>
              </FormControl>
            </Flex>
            <Flex
              ml={["0px", "0px", "20px"]}
              direction={["column", "row", "row"]}
              flex="2"
            >
              <FormControl mr="20px" mb={["20px", "0px"]}>
                <FormLabel>Tags</FormLabel>
                <InputGroup>
                  <Input
                    type="text"
                    placeholder="Productivity"
                    id="tag-input"
                    name="tag"
                    value={formData.tag}
                    onChange={handleFormDataChange}
                    pr="4.5rem"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={addTag}>
                      Add
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText>
                  {formData.tags.map((text) => (
                    <Tag
                      key={text}
                      borderRadius="full"
                      variant="solid"
                      colorScheme="gray"
                    >
                      <TagLabel>{text}</TagLabel>
                      <TagCloseButton onClick={() => removeTag(text)} />
                    </Tag>
                  ))}
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Cost</FormLabel>
                <InputGroup>
                  <InputLeftAddon>$</InputLeftAddon>
                  <Input
                    type="text"
                    value={formData.cost}
                    name="cost"
                    onChange={handleFormDataChange}
                    placeholder="0"
                    maxLength={6}
                  />
                </InputGroup>
                <FormHelperText>Rough estimate</FormHelperText>
              </FormControl>
            </Flex>
          </Flex>
        </Box>
        <Box>
          <Flex direction={["column", "column", "column", "row"]} mb="50px">
            <Flex
              align="center"
              flex="1"
              bg="gray.100"
              mr={["0px", "0px", "0px", "20px"]}
              borderRadius="8px"
              minH="99px"
              my="20px"
            >
              <Box m="auto">
                <Text fontWeight="600">Preview - Coming Soon</Text>
              </Box>
            </Flex>
            <Flex align="center" flex="1">
              <FormControl flex="1" mr="20px">
                <FormLabel>Hours</FormLabel>
                <Input
                  type="text"
                  value={formData.hours}
                  name="hours"
                  onChange={handleFormDataChange}
                  placeholder="2"
                  maxLength={5}
                />
                <FormHelperText>Rough estimate</FormHelperText>
              </FormControl>
              <Button
                onClick={submitPage}
                flex="1"
                isLoading={isLoadingPostRequest}
              >
                Submit Page
              </Button>
            </Flex>
          </Flex>
        </Box>
      </>
    </>
  );
};

export default Create;
