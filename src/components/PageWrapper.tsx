"use client";

import MotionWrapper from "@/components/MotionWrapper";

interface PageWrapperProps {
	children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
	return <MotionWrapper>{children}</MotionWrapper>;
}


