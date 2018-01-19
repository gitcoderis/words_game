/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// leidzia Angularui atidarineti json failus
declare module "*.json" {
    const value: any;
    export default value;
}
