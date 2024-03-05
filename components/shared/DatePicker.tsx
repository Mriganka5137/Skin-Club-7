"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild className=" ">
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-start text-left font-normal border-color--4C4D4F border-opacity-50",
            !date && "text-muted-foreground max-sm:h-7"
          )}
        >
          {date ? (
            <span className="text-color--4C4D4F text-opacity-50 max-sm:text-[8px]">
              {format(date, "PPP")}
            </span>
          ) : (
            <span className="text-color--4C4D4F opacity-50 max-sm:text-[8px]">
              dd/mm//yyyy
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
