export interface IRouteConfig {
	path: string;
	element: JSX.Element;
	children: {
		path: string;
		element: JSX.Element;
		children: IRouteConfig[];
	}[];
}
