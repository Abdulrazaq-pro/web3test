import { Button } from "@/components/ui/button";

export const GradientButton2 = ({
  gradientFrom = "from-blue-500",
  gradientTo = "to-purple-800",
  hoverFrom = "hover:from-blue-600",
  hoverTo = "hover:to-purple-600",
  textColor = "text-white",
  className = "",
  text = "Explore MarketPlace", // Default text
  children,
  ...props
}) => {
  // Use children if provided, otherwise fall back to text prop
  const buttonContent = children || text;

  return (
    <div className="flex flex-col sm:flex-row gap-4  items-center ">
      <div className="flex items-center h-full">
        {/* Left SVG (60% height of button & centered) */}
       

        {/* Button (with explicit min-h to ensure consistent height) */}
        <Button
          size="lg"
          variant="default"
          className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} ${hoverFrom} ${hoverTo} rounded-md px-8 py-3 text-lg min-h-[3rem] ${textColor} ${className}`}
          {...props}
        >
          {buttonContent}
        </Button>

       
      
      </div>
    </div>
  );
};