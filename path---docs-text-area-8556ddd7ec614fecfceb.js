webpackJsonp([0x9acd6b82a4c0],{365:function(e,t){e.exports={pathContext:{component:{displayName:"TextArea",docblock:"@description: a wrapper for Text Input component to create enclosed text area\n@extends: TextInput\n@modifiers: Typography\n@gif: https://media.giphy.com/media/3oFzmoU8TdfHeYZNZu/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/InputsScreen.js",description:null,props:[{name:"testId",type:{name:"string"},description:null,defaultValue:null}]},components:[{node:{displayName:"MultipleShadow",docblock:"@description: A multiple layer for multiple shadow effect for iOS only",description:null,props:[{name:"topShadow",type:{name:"object"},description:{text:"top shadow style to use"},defaultValue:null},{name:"bottomShadow",type:{name:"object"},description:{text:"bottom shadow style to use"},defaultValue:null},{name:"shadowType",type:{name:"enum"},description:{text:"a combination of top and bottom shadow based on shadow presets names"},defaultValue:{value:"'white40'"}},{name:"shadowColor",type:{name:"string"},description:{text:"Custom shadow color to be applied on both top and bottom shadows"},defaultValue:null}]}},{node:{displayName:"Avatar",docblock:"@description: Avatar component for displaying user profile images\n@extends: TouchableOpacity (when passing onPress)\n@image: https://user-images.githubusercontent.com/33805983/34480603-197d7f64-efb6-11e7-9feb-db8ba756f055.png\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/AvatarsScreen.js",description:null,props:[{name:"backgroundColor",type:{name:"string"},description:{text:"Background color for Avatar"},defaultValue:{value:"Colors.dark80"}},{name:"containerStyle",type:{name:"custom"},description:{text:"Additional spacing styles for the container"},defaultValue:null},{name:"imageSource",type:{name:"union"},description:{text:"The image source (external or assets)"},defaultValue:null},{name:"label",type:{name:"string"},description:{text:"Label that can represent initials"},defaultValue:null},{name:"labelColor",type:{name:"string"},description:{text:"The label color"},defaultValue:{value:"Colors.dark10"}},{name:"ribbonLabel",type:{name:"string"},description:{text:"ribbon label to display on the avatar"},defaultValue:null},{name:"ribbonStyle",type:{name:"custom"},description:{text:"ribbon custom style"},defaultValue:null},{name:"ribbonLabelStyle",type:{name:"custom"},description:{text:"ribbon label custom style"},defaultValue:null},{name:"isOnline",type:{name:"bool"},description:{text:"Determine if to show online badge"},defaultValue:null},{name:"size",type:{name:"number"},description:{text:"Custom size for the Avatar"},defaultValue:{value:"50"}},{name:"testID",type:{name:"string"},description:{text:"Use to identify the avatar in tests"},defaultValue:null},{name:"onPress",type:{name:"func"},description:{text:"Press handler"},defaultValue:null}]}},{node:{displayName:"ActionSheet",docblock:"@description: Cross platform Action sheet that also support the native iOS solution\n@gif: https://media.giphy.com/media/3o7aCZHbWJX9CiOV6o/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ActionSheetScreen.js",description:null,props:[{name:"visible",type:{name:"bool"},description:{text:"Whether to show the action sheet or not"},defaultValue:null},{name:"title",type:{name:"string"},description:{text:"Title of the action sheet"},defaultValue:null},{name:"message",type:{name:"string"},description:{text:"Message of the action sheet"},defaultValue:null},{name:"cancelButtonIndex",type:{name:"number"},description:{text:"Index of the option represents the cancel action"},defaultValue:null},{name:"destructiveButtonIndex",type:{name:"number"},description:{text:"Index of the option represents the destructive action (usually used to delete items or abort important actions)"},defaultValue:null},{name:"options",type:{name:"arrayOf"},description:{text:"List of options for the action sheet, follows the Button prop types"},defaultValue:null},{name:"onDismiss",type:{name:"func"},description:{text:"callback for when dismissing the action sheet, usually used for setting visible prop to false"},defaultValue:null},{name:"useNativeIOS",type:{name:"bool"},description:{text:"Should use the native action sheet for iOS"},defaultValue:null}]}},{node:{displayName:"Button",docblock:"@description: Basic button component\n@extends: TouchableOpacity\n@modifiers: margin, background\n@gif: https://media.giphy.com/media/3ohc1fKbeuR1EGhLqw/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ButtonsScreen.js",description:null,props:[{name:"label",type:{name:"string"},description:{text:"Text to show inside the button"},defaultValue:null},{name:"iconSource",type:{name:"union"},description:{text:"Icon image source"},defaultValue:null},{name:"iconStyle",type:{name:"union"},description:{text:"Icon image style"},defaultValue:null},{name:"backgroundColor",type:{name:"string"},description:{text:"Color of the button background"},defaultValue:null},{name:"size",type:{name:"enum"},description:{text:"Size of the button [large, medium, small]"},defaultValue:{value:"'large'"}},{name:"borderRadius",type:{name:"number"},description:{text:"Custom border radius."},defaultValue:{value:"BorderRadiuses.br100"}},{name:"onPress",type:{name:"func"},description:{text:"Actions handler"},defaultValue:null},{name:"disabled",type:{name:"bool"},description:{text:"Disable interactions for the component"},defaultValue:null},{name:"outline",type:{name:"bool"},description:{text:"Button will have outline style"},defaultValue:{value:"false"}},{name:"outlineColor",type:{name:"string"},description:{text:"The outline color"},defaultValue:null},{name:"link",type:{name:"bool"},description:{text:"Button will look like a link"},defaultValue:null},{name:"linkColor",type:{name:"string"},description:{text:"label color for when it's displayed as link"},defaultValue:null},{name:"labelStyle",type:{name:"union"},description:{text:"Additional styles for label text"},defaultValue:{value:"{}"}},{name:"fullWidth",type:{name:"bool"},description:{text:"should the button act as a coast to coast button (no border radius)"},defaultValue:null},{name:"enableShadow",type:{name:"bool"},description:{text:"Control shadow visibility"},defaultValue:null},{name:"labelProps",type:{name:"object"},description:{text:"Props that will be passed to the button's Text label."},defaultValue:null},{name:"avoidInnerPadding",type:{name:"bool"},description:{text:"avoid inner button padding"},defaultValue:null},{name:"avoidMinWidth",type:{name:"bool"},description:{text:"avoid minimum width constraints"},defaultValue:null},{name:"getActiveBackgroundColor",type:{name:"func"},description:{text:"callback for getting activeBackgroundColor (e.g. (calculatedBackgroundColor, prop) => {...})\nbetter set using ThemeManager"},defaultValue:null},{name:"testID",type:{name:"string"},description:{text:"Use to identify the button in tests"},defaultValue:null}]}},{node:{displayName:"ActionBar",docblock:"@description: Quick actions bar, each action support Button component props\n@modifiers: margin, padding\n@gif: https://media.giphy.com/media/xULW8DwxkniFDMw7TO/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ActionBarScreen.js",description:null,props:[{name:"height",type:{name:"number"},description:{text:"action bar height"},defaultValue:{value:"48"}},{name:"backgroundColor",type:{name:"string"},description:{text:"action bar background color"},defaultValue:{value:"Colors.white"}},{name:"actions",type:{name:"arrayOf"},description:{text:"actions for the action bar"},defaultValue:null},{name:"centered",type:{name:"bool"},description:{text:"should action be equally centered"},defaultValue:null},{name:"style",type:{name:"union"},description:{text:"style the action bar"},defaultValue:null}]}},{node:{displayName:"Card.Image",docblock:"@description: Card.Image, part of the Card component belongs inside a Card (better be a direct child).\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardsScreen.js",description:null,props:[{name:"imageSource",type:{name:"union"},description:{text:"Image source, either remote source or local"},defaultValue:null},{name:"width",type:{name:"union"},description:{text:"Image width"},defaultValue:null},{name:"height",type:{name:"union"},description:{text:"Image height"},defaultValue:null},{name:"position",type:{name:"union"},description:{text:"The Image position which determines the appropriate flex-ness of the image and border radius (for Android)\nthis prop derived automatically from Card parent component if it rendered as a direct child of the\nCard component"},defaultValue:null},{name:"borderRadius",type:{name:"number"},description:{text:"border radius, basically for Android since overflow doesn't work well"},defaultValue:{value:"BorderRadiuses.br40"}},{name:"testID",type:{name:"string"},description:null,defaultValue:null}]}},{node:{displayName:"Badge",docblock:"@description: Round colored badge, typically used to show a number\n@extends: Animatable.View\n@image: https://user-images.githubusercontent.com/33805983/34480753-df7a868a-efb6-11e7-9072-80f5c110a4f3.png\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/BadgesScreen.js",description:null,props:[{name:"label",type:{name:"string"},description:{text:"Text to show inside the badge"},defaultValue:null},{name:"backgroundColor",type:{name:"string"},description:{text:"Color of the badge background"},defaultValue:null},{name:"size",type:{name:"enum"},description:{text:"the badge size (default, small)"},defaultValue:{value:"'default'"}},{name:"containerStyle",type:{name:"object"},description:{text:"Additional styles for the top container"},defaultValue:null},{name:"testId",type:{name:"string"},description:{text:"Use to identify the badge in tests"},defaultValue:null}]}},{node:{displayName:"Card.Item",docblock:"@description: Card.Item, a sub Card component for layout-ing inside a card\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardsScreen.js",description:null,props:[{name:"row",type:{name:"bool"},description:{text:"align flex as a row (default)"},defaultValue:{value:"true"}},{name:"column",type:{name:"bool"},description:{text:"align flex as a column"},defaultValue:null}]}},{node:{displayName:"Card.Section",docblock:"@description: Card.Section, a sub Card component for layout-ing inside a card\n@extends: BlurView (iOS only)\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardsScreen.js",description:null,props:[{name:"enableBlur",type:{name:"bool"},description:{text:"Enable blur view for the section"},defaultValue:null},{name:"blurOptions",type:{name:"object"},description:{text:"Blur options"},defaultValue:null},{name:"body",type:{name:"bool"},description:{text:"thid modifier apply inner padding"},defaultValue:null},{name:"footer",type:{name:"bool"},description:{text:"style as a footer, remove bottom spacing"},defaultValue:null},{name:"testId",type:{name:"string"},description:null,defaultValue:null}]}},{node:{displayName:"Card",docblock:"@description: Card component\n@extends: TouchableOpacity (when passing onPress)\n@modifiers: margin, padding\n@gif: https://media.giphy.com/media/l0HU9SKWmv0VTOYMM/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardsScreen.js",description:null,props:[{name:"width",type:{name:"union"},description:{text:"card custom width"},defaultValue:null},{name:"height",type:{name:"union"},description:{text:"card custom height"},defaultValue:null},{name:"row",type:{name:"bool"},description:{text:"should inner card flow direction be horizontal"},defaultValue:null},{name:"borderRadius",type:{name:"number"},description:{text:"card border radius (will be passed to inner Card.Image component)"},defaultValue:{value:"BorderRadiuses.br40"}},{name:"onPress",type:{name:"func"},description:{text:"action for when pressing the card"},defaultValue:null},{name:"enableShadow",type:{name:"bool"},description:{text:"whether the card should have shadow or not"},defaultValue:{value:"true"}},{name:"elevation",type:{name:"number"},description:{text:"elevation value (Android only)"},defaultValue:null},{name:"containerStyle",type:{name:"union"},description:{text:"Additional styles for the top container"},defaultValue:null},{name:"testID",type:{name:"string"},description:{text:"Use to identify the button in tests"},defaultValue:null}]}},{node:{displayName:"Image",docblock:"@description: Image wrapper with extra functionality like source transform and assets support\n@extends: Image",description:null,props:[{name:"sourceTransformer",type:{name:"func"},description:{text:"custom source transform handler for manipulating the image source (great for size control)"},defaultValue:null},{name:"assetName",type:{name:"string"},description:{text:"if provided image source we be drriven from asset name"},defaultValue:null},{name:"assetGroup",type:{name:"string"},description:{text:'the asset group, default is "icons"'},defaultValue:{value:"'icons'"}}]}},{node:{displayName:"TextArea",docblock:"@description: a wrapper for Text Input component to create enclosed text area\n@extends: TextInput\n@modifiers: Typography\n@gif: https://media.giphy.com/media/3oFzmoU8TdfHeYZNZu/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/InputsScreen.js",description:null,props:[{name:"testId",type:{name:"string"},description:null,defaultValue:null}]}},{node:{displayName:"ConnectionStatusBar",docblock:'@description: Top bar to show a "no internet" connection status.\nNote: Run on real device for best results.\n@image: https://user-images.githubusercontent.com/33805983/34683190-f3b1904c-f4a9-11e7-9d46-9a340bd35448.png, https://user-images.githubusercontent.com/33805983/34484206-edc6c6e4-efcb-11e7-88b2-cd394c19dd5e.png\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ConnectionStatusBarScreen.js',description:null,props:[{name:"label",type:{name:"string"},description:{text:"Text to show as the status"},defaultValue:{value:"'No internet. Check your connection.'"}},{name:"onConnectionChange",type:{name:"func"},description:{text:"Handler to get connection change events propagation"},defaultValue:null},{name:"allowDismiss",type:{name:"bool"},description:{text:"Text to show as the status"},defaultValue:{value:"false"}}]}},{node:{displayName:"MaskedInput",docblock:"@description: Mask Input to create custom looking inputs with custom formats\n@extends: TextInput\n@image: https://user-images.githubusercontent.com/33805983/34515770-6a106a4c-f07c-11e7-99c9-616020e9ba7d.png\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/MaskedInputScreen.js",description:null,props:[{name:"renderMaskedText",type:{name:"func"},description:{text:"callback for rendering the custom input out of the value returns from the actual input"},defaultValue:null},{name:"containerStyle",type:{name:"custom"},description:{text:"container style for the masked input container"},defaultValue:null}]}},{node:{displayName:"Carousel",docblock:"@description: Carousel for scrolling pages horizontally\n@gif: https://media.giphy.com/media/l0HU7f8gjpRlMRhKw/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CarouselScreen.js",description:null,props:[{name:"initialPage",type:{name:"number"},description:{text:"this first page to start with"},defaultValue:{value:"0"}},{name:"pageWidth",type:{name:"number"},description:{text:"the page width (all pages should have the same page)"},defaultValue:{value:"Constants.screenWidth"}},{name:"loop",type:{name:"bool"},description:{text:"if true, will have infinite scroll"},defaultValue:null},{name:"onChangePage",type:{name:"func"},description:{text:"callback for when page has changed"},defaultValue:null},{name:"onScroll",type:{name:"func"},description:{text:"callback for onScroll event of the internall ScrollView"},defaultValue:null},{name:"containerStyle",type:{name:"union"},description:{text:"the carousel style"},defaultValue:null}]}},{node:{displayName:"ListItem.Part",docblock:"@description: ListItem.Part, a sub ListItem component for layout-ing inside a ListItem\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/listScreens/BasicListScreen.js",description:null,props:[{name:"left",type:{name:"bool"},description:{text:"this part content will be aligned to left"},defaultValue:null},{name:"middle",type:{name:"bool"},description:{text:"this part content will be aligned to spreaded"},defaultValue:null},{name:"right",type:{name:"bool"},description:{text:"this part content will be aligned to right"},defaultValue:null},{name:"row",type:{name:"bool"},description:{text:"this part content direction will be row (default)"},defaultValue:null},{name:"column",type:{name:"bool"},description:{text:"this part content direction will be column"},defaultValue:null},{name:"containerStyle",type:{name:"union"},description:{text:"container style"},defaultValue:null},{name:"testId",type:{name:"string"},description:null,defaultValue:null}]}},{node:{displayName:"Notification",docblock:"@description: The Notification component will be changed soon, please use the Toast component instead",description:null,props:[]}},{node:{displayName:"Picker.Item",docblock:"@description: Picker.Item, for configuring the Picker's selectable options\n@extends: TouchableOpacity\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FormScreen.js",description:null,props:[{name:"label",type:{name:"string"},description:{text:"[DEPRECATED - please include the label in the value prop] The item label"},defaultValue:null},{name:"value",type:{name:"object"},description:{text:"The item value with the following format - {value: ..., label: ...},\nfor custom shape use getItemLabel, getItemValue props"},defaultValue:null},{name:"getItemLabel",type:{name:"func"},description:{text:"function to return the label out of the item value prop when value is custom shaped."},defaultValue:null},{name:"getItemValue",type:{name:"func"},description:{text:"function to return the value out of the item value prop when value is custom shaped."},defaultValue:null},{name:"isSelected",type:{name:"bool"},description:{text:"Is the item selected"},defaultValue:null},{name:"disabled",type:{name:"bool"},description:{text:"Is the item disabled"},defaultValue:null},{name:"renderItem",type:{name:"func"},description:{text:"render custom item"},defaultValue:null},{name:"onPress",type:{name:"func"},description:null,defaultValue:null}]}},{node:{displayName:"ListItem",docblock:"@description: List item component to render inside a ListView component\n@extends: TouchableOpacity\n@gif: https://media.giphy.com/media/l1IBjHowyPcOTWAY8/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/listScreens/BasicListScreen.js",description:null,props:[{name:"height",type:{name:"union"},description:{text:"the list item height"},defaultValue:{value:"63"}},{name:"onPress",type:{name:"func"},description:{text:"action for when pressing the item"},defaultValue:null},{name:"onLongPress",type:{name:"func"},description:{text:"action for when long pressing the item"},defaultValue:null},{name:"containerStyle",type:{name:"union"},description:{text:"Additional styles for the top container"},defaultValue:null},{name:"containerElement",type:{name:"func"},description:{text:"The container element to wrap the ListItem"},defaultValue:{value:"TouchableOpacity"}},{name:"testID",type:{name:"string"},description:{text:"Use to identify the ListItem in tests"},defaultValue:null},{name:"underlayColor",type:null,description:null,defaultValue:{value:"Colors.dark70"}}]}},{node:{displayName:"TextInput",docblock:"@description: A wrapper for Text Input component with extra functionality like floating placeholder\n@extends: TextInput\n@modifiers: Typography\n@gif: https://media.giphy.com/media/xULW8su8Cs5Z9Fq4PS/giphy.gif, https://media.giphy.com/media/3ohc1dhDcLS9FvWLJu/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/InputsScreen.js",description:null,props:[{name:"floatingPlaceholder",type:{name:"bool"},description:{text:"should placeholder have floating behavior"},defaultValue:null},{name:"floatingPlaceholderColor",type:{name:"string"},description:{text:"floating placeholder color"},defaultValue:{value:"Colors.dark40"}},{name:"hideUnderline",type:{name:"bool"},description:{text:"hide text input underline, by default false"},defaultValue:null},{name:"underlineColor",type:{name:"union"},description:{text:"underline color in a string format or object of states - {default: 'black', error: 'red', focus: 'blue'}"},defaultValue:null},{name:"centered",type:{name:"bool"},description:{text:"should text input be align to center"},defaultValue:null},{name:"error",type:{name:"string"},description:{text:"input error message, should be empty if no error exists"},defaultValue:null},{name:"enableErrors",type:{name:"bool"},description:{text:"should the input component support error messages"},defaultValue:{value:"true"}},{name:"expandable",type:{name:"bool"},description:{text:"should the input expand to another text area modal"},defaultValue:null},{name:"transformer",type:{name:"func"},description:{text:"transform function executed on value and return transformed value"},defaultValue:null},{name:"testId",type:{name:"string"},description:null,defaultValue:null},{name:"placeholderTextColor",type:null,description:null,defaultValue:{value:"Colors.dark40"}}]}},{node:{displayName:"PageControl",docblock:"@description: Page indicator, typically used in paged scroll-views\n@image: https://user-images.githubusercontent.com/33805983/34663655-76698110-f460-11e7-854b-243d27f66fec.png\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/PageControlScreen.js",description:null,props:[{name:"containerStyle",type:{name:"union"},description:{text:"Additional styles for the top container"},defaultValue:null},{name:"numOfPages",type:{name:"number"},description:{text:"Total number of pages"},defaultValue:null},{name:"currentPage",type:{name:"number"},description:{text:"Zero-based index of the current page"},defaultValue:null},{name:"onPagePress",type:{name:"func"},description:{text:"Action handler for clicking on a page indicator"},defaultValue:null},{name:"color",type:{name:"string"},description:{text:"Color of the selected page dot and the border of the not selected pages"},defaultValue:null},{name:"size",type:{name:"number"},description:{text:"The size of the page indicator"},defaultValue:null}]}},{node:{displayName:"PickerModal",docblock:"@ignore: true",description:null,props:[{name:"topBarProps",type:{name:"shape"},description:null,defaultValue:null}]}},{node:{displayName:"Picker",docblock:"@description: Picker Component, support single and multiple selection, blur model and floating placeholder.\n@extends: TextInput\n@gif: https://media.giphy.com/media/3o751SiuZZiByET2lq/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FormScreen.js",description:null,props:[{name:"value",type:{name:"union"},description:{text:"picker current value in the shape of {value: ..., label: ...}, for custom shape use 'getItemValue' prop"},defaultValue:null},{name:"onChange",type:{name:"func"},description:{text:"callback for when picker value change"},defaultValue:null},{name:"mode",type:{name:"enum"},description:{text:"SINGLE mode or MULTI mode"},defaultValue:{value:"'SINGLE'"}},{name:"enableModalBlur",type:{name:"bool"},description:{text:"Adds blur effect to picker modal (only iOS)"},defaultValue:{value:"true"}},{name:"renderPicker",type:{name:"func"},description:{text:"render custom picker"},defaultValue:null},{name:"onPress",type:{name:"func"},description:{text:"add onPress callback for when pressing the picker"},defaultValue:null},{name:"getItemValue",type:{name:"func"},description:{text:"a function that extract the unique value out of the value prop in case value has a custom structure."},defaultValue:null},{name:"topBarProps",type:{name:"shape"},description:{text:"The picker modal top bar props"},defaultValue:null},{name:"expandable",type:null,description:null,defaultValue:{value:"true"}},{name:"text70",type:null,description:null,defaultValue:{value:"true"}},{name:"floatingPlaceholder",type:null,description:null,defaultValue:{value:"true"}}]}},{node:{displayName:"Stepper",docblock:"@description: Stepper component with increase and decrease buttons\n@gif: https://media.giphy.com/media/3oFzm47bk0v4WV15O8/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FormScreen.js",description:null,props:[{name:"label",type:{name:"string"},description:{text:"Text to show next to the current number"},defaultValue:null},{name:"min",type:{name:"number"},description:{text:"Minimum value"},defaultValue:null},{name:"max",type:{name:"number"},description:{text:"Maximum value"},defaultValue:null},{name:"containerStyle",type:{name:"object"},description:{text:"Additional styles for the top container"},defaultValue:null},{name:"onValueChange",type:{name:"func"},description:{text:"Handler function to receive updates when the value changes"},defaultValue:null},{name:"initialValue",type:{name:"number"},description:{text:"the initial value"},defaultValue:null}]}},{node:{displayName:"StepperButton",docblock:"@ignore",description:null,props:[{name:"label",type:{name:"string"},description:{text:"Text to show on the button"},defaultValue:null},{name:"testId",type:{name:"string"},description:{text:"Use to identify the button in tests"},defaultValue:null},{name:"styles",type:{name:"object"},description:{text:"Style from the parent component with `button` style, `buttonText` style and `disableText` style"},defaultValue:null},{name:"disabled",type:{name:"bool"},description:{text:"Disabled state of the button"},defaultValue:null},{name:"onPress",type:{name:"func"},description:{text:"Handler function to receive updates when the value changes"},defaultValue:null}]}},{node:{displayName:"TabBar.Item",docblock:"@description: TabBar.Item, inner component of TabBar for configuring the tabs\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/TabBarScreen.js",description:null,props:[{name:"label",type:{name:"string"},description:{text:"label of the tab"},defaultValue:null},{name:"labelStyle",type:{name:"custom"},description:{text:"custom label style"},defaultValue:null},{name:"selectedLabelStyle",type:{name:"custom"},description:{text:"custom selected tab label style"},defaultValue:null},{name:"selected",type:{name:"bool"},description:{text:"whether the tab is selected or not"},defaultValue:null},{name:"onPress",type:{name:"func"},description:{text:"callback for when pressing a tab"},defaultValue:null}]}},{node:{displayName:"TabBar",docblock:"@description: Basic TabBar component\n@gif: https://media.giphy.com/media/3o751YHFZVlv3Ay4k8/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/TabBarScreen.js",description:null,props:[{name:"selectedIndex",type:{name:"number"},description:{text:"current selected tab index"},defaultValue:{value:"0"}},{name:"style",type:{name:"custom"},description:{text:"custom style for the tab bar"},defaultValue:null},{name:"indicatorStyle",type:{name:"custom"},description:{text:"custom style for the selected indicator"},defaultValue:null},{name:"disableAnimatedTransition",type:{name:"bool"},description:{text:"disable the animated transition of the tab indicator"},defaultValue:null},{name:"onChangeIndex",type:{name:"func"},description:{text:"callback for when index has change"},defaultValue:null},{name:"height",type:null,description:null,defaultValue:{value:"51"}}]}},{node:{displayName:"Text",docblock:"@description: A wrapper for Text component with extra functionality like modifiers support\n@extends: Text\n@modifiers: margins, color, typography",description:null,props:[{name:"color",type:{name:"string"},description:{text:"color of the text"},defaultValue:null},{name:"center",type:{name:"bool"},description:{text:"whether to center the text (using textAlign)"},defaultValue:null},{name:"testID",type:{name:"string"},description:null,defaultValue:null}]}},{node:{displayName:"TagsInput",docblock:"@description: Tags input component (chips)\n@modifiers: Typography\n@gif: https://media.giphy.com/media/3oFzlXJF7FAQJNqGQw/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FormScreen.js",description:null,props:[{name:"tags",type:{name:"arrayOf"},description:{text:"list of tags. can be string or custom object when implementing getLabel"},defaultValue:null},{name:"getLabel",type:{name:"func"},description:{text:"callback for extracting the label out of the tag item"},defaultValue:null},{name:"renderTag",type:{name:"func"},description:{text:"callback for custom rendering tag item"},defaultValue:null},{name:"onChangeTags",type:{name:"func"},description:{text:"callback for onChangeTags event"},defaultValue:null},{name:"onCreateTag",type:{name:"func"},description:{text:"callback for creating new tag out of input value (good for composing tag object)"},defaultValue:null},{name:"onTagPress",type:{name:"func"},description:{text:"callback for when pressing a tag in the following format (tagIndex, markedTagIndex) => {...}"},defaultValue:null},{name:"disableTagRemoval",type:{name:"bool"},description:{text:"if true, tags *removal* Ux won't be available"},defaultValue:null},{name:"disableTagAdding",type:{name:"bool"},description:{text:"if true, tags *adding* Ux (i.e. by 'submitting' the input text) won't be available"},defaultValue:null},{name:"containerStyle",type:{name:"custom"},description:{text:"custom styling for the component container"},defaultValue:null},{name:"tagStyle",type:{name:"custom"},description:{text:"custom styling for the tag item"},defaultValue:null},{name:"inputStyle",type:{name:"custom"},description:{text:"custom styling for the text input"},defaultValue:null},{name:"hideUnderline",type:{name:"bool"},description:{text:"should hide input underline"},defaultValue:null}]}},{node:{displayName:"TouchableOpacity",docblock:"@description A wrapper for React Native TouchableOpacity component.\nsupport onPress, throttling and activeBackgroundColor.\n@extends: TouchableOpacity\n@gif: https://media.giphy.com/media/xULW8AMIgw7l31zjm8/giphy.gif\n@example https://github.com/wix/react-native-ui-lib/blob/master/src/components/touchableOpacity/index.js",description:null,props:[{name:"throttleTime",type:{name:"number"},description:{text:"throttle time in MS for onPress callback"},defaultValue:null},{name:"throttleOptions",type:{name:"shape"},description:{text:"throttle options"},defaultValue:null},{name:"activeBackgroundColor",type:{name:"string"},description:{text:"Apply background color on TouchableOpacity when active (press is on)"},defaultValue:null}]}},{node:{displayName:"View",docblock:"@description: Wrapper component for React Native View component\n@extends: View\n@modifiers: margins, paddings, alignments, background, borderRadius",description:null,props:[]}},{node:{displayName:"Tour",docblock:"[WIP] a Tour component for feature discoverability",description:{text:"[WIP] a Tour component for feature discoverability"},props:[{name:"visible",
type:{name:"bool"},description:{text:"Whether to show the tour or not"},defaultValue:{value:"false"}},{name:"onClose",type:{name:"func"},description:{text:"callback for closing the tour"},defaultValue:null},{name:"overlayColor",type:{name:"string"},description:{text:"The overlay background color"},defaultValue:{value:"Colors.white"}},{name:"overlayOpacity",type:{name:"number"},description:{text:"The overlay opacity"},defaultValue:{value:"0.9"}},{name:"message",type:{name:"string"},description:{text:"the message to show next to the target component"},defaultValue:null},{name:"messageStyle",type:{name:"union"},description:{text:"the message custom style"},defaultValue:null}]}},{node:{displayName:"Toast",docblock:"@description Toast component for showing a feedback about a user action.\n@extends: Animatable.View\n@gif: https://media.giphy.com/media/3oFzm1pKqGXybiDUre/giphy.gif\n@example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ToastsScreen.js",description:null,props:[{name:"visible",type:{name:"bool"},description:{text:"Whether to show or hide the toast"},defaultValue:null},{name:"position",type:{name:"enum"},description:{text:"The position of the toast. top or bottom"},defaultValue:{value:"'top'"}},{name:"height",type:{name:"number"},description:{text:"The height of the toast"},defaultValue:null},{name:"backgroundColor",type:{name:"string"},description:{text:"The background color of the toast"},defaultValue:null},{name:"color",type:{name:"string"},description:{text:"the toast content color (message, actions labels)"},defaultValue:{value:"Colors.white"}},{name:"message",type:{name:"string"},description:{text:"the toast message"},defaultValue:null},{name:"messageStyle",type:{name:"union"},description:{text:"a custom style for the toast message"},defaultValue:null},{name:"actions",type:{name:"arrayOf"},description:{text:"one or two actions for the user to display in the toast"},defaultValue:null},{name:"onDismiss",type:{name:"func"},description:{text:"callback for dismiss action"},defaultValue:null},{name:"allowDismiss",type:{name:"bool"},description:{text:"show dismiss action"},defaultValue:null},{name:"centerMessage",type:{name:"bool"},description:{text:"should message be centered in the toast"},defaultValue:null},{name:"animated",type:{name:"bool"},description:{text:"should the toast appear/disappear with animation"},defaultValue:{value:"true"}},{name:"enableBlur",type:{name:"bool"},description:{text:"enable blur effect for Toast"},defaultValue:null},{name:"blurOptions",type:{name:"object"},description:{text:"blur option for blur effect according to react-native-blur lib (make sure enableBlur is on)"},defaultValue:null},{name:"zIndex",type:{name:"number"},description:{text:"custom zIndex for toast"},defaultValue:{value:"100"}}]}},{node:{displayName:"A",docblock:"@ignore: true",description:null,props:[{name:"topBarProps",type:{name:"shape"},description:null,defaultValue:null}]}},{node:{displayName:"IGNORE",docblock:"",description:null,props:[{name:"topBarProps",type:{name:"shape"},description:null,defaultValue:null}]}},{node:{displayName:"IGNORE",docblock:"",description:null,props:[{name:"label",type:{name:"string"},description:{text:"Text to show on the button"},defaultValue:null},{name:"testId",type:{name:"string"},description:{text:"Use to identify the button in tests"},defaultValue:null},{name:"styles",type:{name:"object"},description:{text:"Style from the parent component with `button` style, `buttonText` style and `disableText` style"},defaultValue:null},{name:"disabled",type:{name:"bool"},description:{text:"Disabled state of the button"},defaultValue:null},{name:"onPress",type:{name:"func"},description:{text:"Handler function to receive updates when the value changes"},defaultValue:null}]}},{node:{displayName:"IGNORE",docblock:"@description: A multiple layer for multiple shadow effect for iOS only",description:null,props:[{name:"topShadow",type:{name:"object"},description:{text:"top shadow style to use"},defaultValue:null},{name:"bottomShadow",type:{name:"object"},description:{text:"bottom shadow style to use"},defaultValue:null},{name:"shadowType",type:{name:"enum"},description:{text:"a combination of top and bottom shadow based on shadow presets names"},defaultValue:{value:"'white40'"}},{name:"shadowColor",type:{name:"string"},description:{text:"Custom shadow color to be applied on both top and bottom shadows"},defaultValue:null}]}},{node:{displayName:"Carousel2",docblock:"@ignore",description:null,props:[{name:"pageWidth",type:{name:"number"},description:null,defaultValue:{value:"Constants.screenWidth"}},{name:"initialPage",type:{name:"number"},description:null,defaultValue:{value:"0"}},{name:"loop",type:{name:"bool"},description:null,defaultValue:null}]}},{node:{displayName:"IGNORE",docblock:"",description:null,props:[{name:"pageWidth",type:{name:"number"},description:null,defaultValue:{value:"Constants.screenWidth"}},{name:"initialPage",type:{name:"number"},description:null,defaultValue:{value:"0"}},{name:"loop",type:{name:"bool"},description:null,defaultValue:null}]}}]}}}});
//# sourceMappingURL=path---docs-text-area-8556ddd7ec614fecfceb.js.map