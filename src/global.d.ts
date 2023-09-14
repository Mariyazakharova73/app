declare module '*.scss' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

// declaration.d.ts
// declare module '*.scss';
// declare module "*.module.css";
// declare module "*.module.scss";