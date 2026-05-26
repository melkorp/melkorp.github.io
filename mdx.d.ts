declare module "*.mdx" {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;

  export default MDXComponent;

  export const metadata: {
    title?: string;
    description?: string;
  };
}
