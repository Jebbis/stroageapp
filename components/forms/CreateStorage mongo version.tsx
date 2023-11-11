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
import { StorageValidation } from "@/lib/validations/storagemongo";
import { createStorage } from "@/lib/actions/storage.actions";

function CreateStorage() {
  const router = useRouter();

  const form = useForm<z.input<typeof StorageValidation>>({
    resolver: zodResolver(StorageValidation),
    defaultValues: {
      clientName: "",
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

      createStorage(storageData);

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
