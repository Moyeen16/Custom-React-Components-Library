# Custom-React-Components-Library

This library contains some reusable custom react components.

View and explore more using this [storybook](https://moyeen16.github.io/Custom-React-Components-Library/).

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
const [menuRouteSelected, setMenuRouteSelected] = React.useState<string>();
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
import { Button } from  "ms-custom-react-components-library";
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

### Input

```
import { Input } from  "ms-custom-react-components-library";
...
const [value, setValue] = React.useState("");
const [showPassword, setShowPassword] = React.useState(false);
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setValue(e.target.value);
};
const passwordToggle = (toggleValue: boolean) => {
	setShowPassword(toggleValue);
};
const handleValidation = (value: string | number) => {
    console.log("VALUE", value);
    const response = {
      error: value === "Moyeen" ? true : false,
      message: "Validation Failed",
    };
    return response;
};
...
<Input
	label: "Label",
	placeholder: "Enter text here",
	required: true,
	type: "text",
	onChange={handleChange}
	value={value}
	validation={handleValidation(value)}
	allowClear: true,
	showCount: true,
	maxLength: 30,
/>
<Input
	label: "Label",
	placeholder: "Enter text here",
	required: true,
	type: "password",
	onChange={handleChange}
	value={value}
	visibilityToggle={{
		visible: showPassword,
		onVisibleChange: passwordToggle,
	}}
/>
```

### Textarea

```
import { Textarea } from  "ms-custom-react-components-library";
...
const [value, setValue] = React.useState("");
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	setValue(e.target.value);
};
const handleValidation = (value: string | number) => {
    console.log("VALUE", value);
    const response = {
      error: value === "Moyeen" ? true : false,
      message: "Validation Failed",
    };
    return response;
};
...
<Textarea
	label: "Label",
	placeholder: "Enter text here",
	required: true,
	rows:{5}
	onChange={handleChange}
	value={value}
	validation={handleValidation(value)}
/>
```
