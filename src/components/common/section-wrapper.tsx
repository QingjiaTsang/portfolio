"use client";

export function SectionWrapper(Component: React.ComponentType, idName: string) {
  return function HOC() {
    return (
      <div className="relative z-0 mx-auto max-w-7xl px-6 py-10 sm:p-16">
        <div id={idName} className="py-2.5" />
        
        <Component />
      </div>
    );
  };
}
