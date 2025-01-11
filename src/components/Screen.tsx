import { ComponentProps } from "react";

type ScreenProps = ComponentProps<"div">;

export function Screen({ children, className, ...rest }: ScreenProps) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-white text-black dark:bg-black dark:text-white dark-gradient`}
    >
      <div
        className={
          "relative flex min-h-[100dvh] w-full max-w-[1000px] flex-col px-5 py-5 " +
          className
        }
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}

export function Screen0({ children, className, ...rest }: ScreenProps) {
  return (
    <div
      className={`flex w-full items-center justify-center bg-white text-black dark:bg-black dark:text-white`}
    >
      <div
        className={
          "flex min-h-[100dvh] w-full max-w-[800px] flex-col " + className
        }
        {...rest}
      >
        {children}
      </div>
    </div>
  );
}
