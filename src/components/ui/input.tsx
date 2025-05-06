import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
function Input({ className, type, ...props }: ComponentProps<"input">) {

	
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				" file:text-base text-zinc-500 placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-white flex h-9 w-full min-w-0 rounded-md border px-3 py-1  outline-none file:inline-flex ",
				
				className,
			)}
			{...props}
		/>
	);
}

export { Input };