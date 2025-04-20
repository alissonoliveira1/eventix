import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Search } from "lucide-react";
function Input({ className, type, ...props }: ComponentProps<"input">) {

	const styles = "border rounded-md flex items-center px-3 py-1 gap-2 h-9 w-full min-w-0 file:h-7 file:inline-flex file:border-0 file:text-sm file:font-medium "
	return (
		<div
		className={styles}
		>
			<Search className="h-6 w-6 text-muted-foreground" />
			<input
			type={type}
			data-slot="input"
			className={cn(
				"outline-none  file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0  bg-transparent  text-base shadow-xs transition-[color,box-shadow]  file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",

				"aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:",
				className,
			)}
			{...props}
		/>
		</div>
	);
}

export { Input };