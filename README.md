# Custom-React-Components-Library

This library contains some reusable custom react components.

## Installation

```
npm i ms-custom-react-components-library
```

## Install Additional Dependency

```
npm i react-router-dom
```

## Usage

### TopNavbar

```
import { TopNavbar } from  "ms-custom-react-components-library";
import { BrowserRouter } from  "react-router-dom";
...
<BrowserRouter>		// The Navbar component needs to be inside your application's Browser Router
	<TopNavbar  applicationName="Sample App"  />
</BrowserRouter>
...
```

### Menu

```
import { Menu } from  "ms-custom-react-components-library";
...
const  handleItemClick = (route: string) => {
	setMenuRouteSelected(route);
};
const  menuItems: IMenuItemsProps[] = [
	{
		label:  "Home",
		onClick: () =>  handleItemClick("/home"),
		menuItems: [],
	},
	{
		label:  "Products",
		menuItems: [
			{
				label:  "Product 1",
				onClick: () =>  handleItemClick("/products/product_1"),
				menuItems: [],
			},
			{
				label:  "Product 2",
				onClick: () =>  handleItemClick("/products/product_2"),
				menuItems: [],
			},
		],
	},
	{
		label:  "About",
		onClick: () =>  handleItemClick("/about"),
		menuItems: [],
	},
	{
		label:  "Contact",
		onClick: () =>  handleItemClick("/contact"),
		menuItems: [],
	},
];
...
<Menu  menuItems={menuItems}  />
```

### Buttons

```
import { Button} from  "ms-custom-react-components-library";
...
const  buttonClick = (text: String) => {
	alert(text);
};
...
<Button
	primary			//primary|transparent|alternate
	transition		//add this for a hover transition effect
	onClick={() => buttonClick("Primary Button Transition clicked!")}
>
	Button
</Button>
```
