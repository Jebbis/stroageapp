"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { StorageValidation } from "@/lib/validations/storagemongo";
import { updateStorage } from "@/lib/actions/storage.actions";

interface Props {
  id: string;
  client: string;
  storageName: string;
  storageCapacity: string;
  streetName: string;
  city: string;
  postcode: string;
  deliveryInstructions: string;
  note: string;
}

function UpdateStorage({ id, client, storageName, storageCapacity, streetName, city, postcode, deliveryInstructions, note }: Props) {
  const router = useRouter();
  const form = useForm<z.input<typeof StorageValidation>>({
    resolver: zodResolver(StorageValidation),
    defaultValues: {
      storageName: storageName,
      storageCapacity: storageCapacity,
      streetName: streetName,
      city: city,
      postcode: postcode,
      deliveryInstructions: deliveryInstructions,
      note: note,
    },
  });

  const onSubmit = async (values: z.infer<typeof StorageValidation>) => {
    alert("asdf");
    try {
      const storageData = {
        storageName: values.storageName,
        storageCapacity: values.storageCapacity,
        address: {
          streetName: values.storageName,
          city: values.city,
          postcode: values.postcode,
        },
        deliveryInstructions: values.deliveryInstructions,
        note: values.note,
      };
      console.log(storageData);
      updateStorage(id, storageData);

      router.push("/customers");
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Log Zod validation errors. Doesnt actually work.
        console.log("Zod Validation Errors:", error.errors);
      } else {
        console.log("Error submitting form:", error);
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
          name="storageName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Storage Name
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder={storageName} className="account-form_input" {...field} />
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
                <Input type="text" placeholder={"" + storageCapacity} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="streetName"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Street Name
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder={streetName} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                City
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder={city} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="postcode"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Postcode
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder={postcode} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deliveryInstructions"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Delivery Instructions
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder={deliveryInstructions} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="note"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-3 w-full">
              <FormLabel className="text-base-semibold text-light-2">
                Note
              </FormLabel>
              <FormControl>
                <Input type="text" placeholder={note} className="account-form_input" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-primary-500">
          Submit Changes
        </Button>
      </form>
    </Form>
  );
}

export default UpdateStorage;
