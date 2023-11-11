"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StorageValidation } from "@/lib/validations/storage";

import { placeStorages } from "@/constants";

function CreateStorage() {
  const router = useRouter();

  const newStorage = (storageData) => {
    const { clientName, clientId, storages } = storageData;

    // Check if a client with the given clientID already exists
    const existingClientIndex = placeStorages.findIndex((client) => {
      return (
        client.clientId == clientId &&
        String(client.clientName).trim() == String(clientName).trim()
      );
    });

    if (existingClientIndex !== -1) {
      console.log("löyty");
      // If the client exists, add a new storage to its storages array
      placeStorages[existingClientIndex].storages.push(...storages);
    } else {
      console.log("ei löydy");
      // If the client doesn't exist, create a new entry with the provided data
      placeStorages.push({ clientName, clientId, storages });
    }
  };

  const form = useForm<z.infer<typeof StorageValidation>>({
    resolver: zodResolver(StorageValidation),
    defaultValues: {
      clientName: "",
      clientID: "",
      storageName: "",
      storageCapacity: "",
      lastDelivery: "",
      details: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof StorageValidation>) => {
    try {
      console.log("Form Values:", values);

      const storageData = {
        clientName: values.clientName,
        clientId: values.clientID,
        storages: [
          {
            storageName: values.storageName,
            storageCapacity: values.storageCapacity,
            lastDelivery: values.lastDelivery,
            details: values.details,
          },
        ],
      };

      console.log("Storage Data:", storageData);

      newStorage(storageData);
      router.push("/storages");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Log Zod validation errors
        console.error("Zod Validation Errors:", error.errors);
      } else {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-start gap-10 mt-10"
      >
        <FormField
          control={form.control}
          name="clientID"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Client ID
              </FormLabel>
              <FormControl>
                <Input type="text" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Client Name
              </FormLabel>
              <FormControl>
                <Input type="text" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="storageName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Storage Name
              </FormLabel>
              <FormControl>
                <Input type="text" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="storageCapacity"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Storage Capacity
              </FormLabel>
              <FormControl>
                <Input type="text" className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastDelivery"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Last Delivery
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="DD.MM.YYYY"
                  className="account-form_input"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Details
              </FormLabel>
              <FormControl>
                <Textarea rows={10} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default CreateStorage;
