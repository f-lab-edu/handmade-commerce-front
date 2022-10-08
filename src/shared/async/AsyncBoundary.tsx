import React, { ComponentProps, ReactNode, Suspense } from "react";
import Loading from "../component/Loading";
import ErrorBoundary from "./ErrorBoundary";

type ErrorBoundaryProps = ComponentProps<typeof ErrorBoundary>;

interface Props extends Omit<ErrorBoundaryProps, "rejectedFallback"> {
  rejectedFallback?: ErrorBoundaryProps["rejectedFallback"];
  pendingFallback?: ReactNode;
  children: ReactNode;
}

const AsyncBoundary = ({
  rejectedFallback,
  pendingFallback,
  children,
}: Props) => {
  return (
    <ErrorBoundary rejectedFallback={rejectedFallback}>
      <Suspense fallback={pendingFallback ? pendingFallback : <Loading />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
};

export default AsyncBoundary;
