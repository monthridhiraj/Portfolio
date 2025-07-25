import React, { useState } from 'react';
import { cn } from '@/lib/utils';

const FloatingLabel = ({ children, label, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== '');
  };

  return (
    <div className={cn("relative", className)}>
      <label
        className={cn(
          "floating-label absolute left-3 top-3 text-muted-foreground pointer-events-none",
          (isFocused || hasValue) && "active"
        )}
      >
        {label}
      </label>
      {React.cloneElement(children, {
        onFocus: handleFocus,
        onBlur: handleBlur,
        className: cn(children.props.className, "pt-6 pb-2")
      })}
    </div>
  );
};

export default FloatingLabel;