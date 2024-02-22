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

### Avatar

```
import { Avatar } from  "ms-custom-react-components-library";
import { User } from "@styled-icons/boxicons-regular/User";
...
<Avatar
	size={20}
	shape="circle"
	icon: <User size={20} />
></Avatar>
<Avatar
	src="link-to-image"
	alt="Alt"
></Avatar>
```

### Switch

```
import { Switch } from "ms-custom-react-components-library";
...
const [selected, setSelected] = React.useState(false);
...
<Switch
	{...args}
	onChange={(val) => {
		setSelected(val);
	}}
/>
<Switch
	{...args}
	onChange={(val) => {
		setSelected(val);
	}}
	labelChecked="Yes"
	labelNonChecked="No"
/>
```

### Checkbox

```
import { Checkbox } from "ms-custom-react-components-library";
...
const [value, setValue] = React.useState(true);
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
setValue(e.target.checked);
};
...
<Checkbox
	{...args}
	id="Checkbox1"
	onChange={handleChange}
	checked={value}
	label="Checkbox"
	disabled={false}
/>
```

### Modal

```
import { Button, Modal } from "ms-custom-react-components-library";
...
const [isOpen, setIsOpen] = React.useState(false);
return (
	<div>
		<Button primary onClick={() => setIsOpen(true)}>
			Open Modal
		</Button>
		<Modal
			{...args}
			isOpen={isOpen}
			onClose={() => {
				setIsOpen(false);
			}}
			onCancel={() => setIsOpen(false)}
			onOk={() => setIsOpen(false)}
		>
			<div style={{ width: "500px" }}>
				<h1>Basic Simple Modal</h1>
				<div>Contents</div>
				<div>Contents</div>
				<div>Contents</div>
			</div>
		</Modal>
	</div>
);
```

### Drawer

```
import { Button, Drawer } from "ms-custom-react-components-library";
...
const [isOpen, setIsOpen] = React.useState(false);
...
return (
	<div>
		<Button primary onClick={() => setIsOpen(true)}>
			Open Drawer
		</Button>
		<Drawer
			{...args}
			isOpen={isOpen}
			onClose={() => {
				setIsOpen(false);
			}}
			onCancel={() => setIsOpen(false)}
			onOk={() => setIsOpen(false)}
		>
			<div style={{ width: "500px" }}>
				<h1>Basic Simple Drawer</h1>
				<div>Contents</div>
				<div>Contents</div>
				<div>Contents</div>
			</div>
		</Drawer>
	</div>
);
```

### Progress Bar

```
import { Button, Drawer } from "ms-custom-react-components-library";
...
return (
	<div style={{ width: "200px" }}>
		<ProgressBar completedPercent={10}, />
	</div>
);
```

### Tag

```
import { Tag } from "ms-custom-react-components-library";
...
return(
	<Tag text="Hello!" />
)
```

### Dropdown

```
import { Dropdown } from "ms-custom-react-components-library";
...
const options: [
{ value: "option1", label: "Option 1" },
{ value: "option2", label: "Option 2" },
{ value: "option3", label: "Option 3" },
];

...
return(
	<div style={{ width: "700px" }}>
		<Dropdown options={options} onChange={(value) => {
                    alert(value);
                }} />
	</div>
)
```

### Table

```
import { Table, ProgressBar } from "ms-custom-react-components-library";
...
const testData: ITableData = {
	headers: [
		{
			key: "driver",
			title: "DRIVER",
			dataIndex: "driver",
			sortable: true,
		},
		{
			key: "age",
			title: "AGE",
			dataIndex: "age",
			align: "center",
		},
		{
			key: "constructor",
			title: "CONSTRUCTOR",
			dataIndex: "constructor",
		},
		{
			key: "winPercent",
			title: "WIN PERCENTAGE",
			dataIndex: "winPercent",
			sortable: true,
			customComponent: (data: number) => (
				<ProgressBar
					showPercentage
					completedPercent={data}
					bgColor={"#9249B2"}
				/>
			),
			widthPercentage: 20,
		},
		{
			key: "championships",
			title: "CHAMPIONSHIPS",
			dataIndex: "championships",
			align: "center",
		},
		{
			key: "wins",
			title: "WINS",
			dataIndex: "wins",
			align: "center",
		},
		{
			key: "nationality",
			title: "NATIONALITY",
			dataIndex: "nationality",
			align: "left",
		},
	],
	data: [
		{
			driver: "Sebastian Vettel",
			age: 36,
			constructor: "Ferrari, Red Bull, Toro Rosso, BMW Sauber",
			winPercent: Math.round((53 * 100) / 299),
			nationality: "Germany",
			championships: 4,
			wins: 53,
		},
		{
			driver: "Lewis Hamilton",
			age: 39,
			constructor: "Mercedes",
			winPercent: Math.round((103 * 100) / 332),
			nationality: "United Kingdom",
			championships: 7,
			wins: 103,
		},
		{
			driver: "Fernando Alonso",
			age: 42,
			constructor: "Renault, McLaren, Ferrari",
			winPercent: Math.round((32 * 100) / 323),
			nationality: "Spain",
			championships: 2,
			wins: 32,
		},
		{
			driver: "Nico Rosberg",
			age: 38,
			constructor: "Mercedes, Williams",
			winPercent: Math.round((23 * 100) / 206),
			nationality: "Germany",
			championships: 1,
			wins: 23,
		},
		{
			driver: "Kimi Räikkönen",
			age: 43,
			constructor: "Ferrari, McLaren, Sauber, Lotus",
			winPercent: Math.round((21 * 100) / 343),
			nationality: "Finland",
			championships: 1,
			wins: 21,
		},
		{
			driver: "Jenson Button",
			age: 44,
			constructor: "Brawn GP, BAR, Honda, McLaren",
			winPercent: Math.round((15 * 100) / 306),
			nationality: "United Kingdom",
			championships: 1,
			wins: 15,
		},
		{
			driver: "Max Verstappen",
			age: 25,
			constructor: "Red Bull",
			winPercent: Math.round((20 * 100) / 123),
			nationality: "Netherlands",
			championships: 0,
			wins: 20,
		},
		{
			driver: "Daniel Ricciardo",
			age: 33,
			constructor: "Red Bull, Renault",
			winPercent: Math.round((9 * 100) / 200),
			nationality: "Australia",
			championships: 0,
			wins: 9,
		},
	],
};
return (
	<div style={{ width: "1000px" }}>
		<Table tableData={testData} />
	</div>
);

```
