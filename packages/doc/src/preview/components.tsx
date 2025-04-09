import { Cell, DialogTrigger, TextField as RACTextField, TableBody, TooltipTrigger } from 'react-aria-components'
import {
  Autocomplete,
  Breadcrumb,
  Breadcrumbs,
  Button,
  Calendar,
  Checkbox,
  CheckboxGroup,
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem,
  ColorThumb,
  ColorWheel,
  Column,
  ComboBox,
  DateField,
  DatePicker,
  DateRangePicker,
  Dialog,
  Disclosure,
  GridList,
  GridListItem,
  Group,
  Heading,
  Input,
  Label,
  Link,
  ListBox,
  ListBoxItem,
  Menu,
  MenuItem,
  Meter,
  Modal,
  NumberField,
  Popover,
  ProgressBar,
  Radio,
  RadioGroup,
  RangeCalendar,
  Row,
  SearchField,
  Select,
  Separator,
  Slider,
  Switch,
  Tab,
  Table,
  TableHeader,
  TabList,
  TabPanel,
  Tabs,
  Tag,
  TagGroup,
  TextField,
  textFieldClassName,
  TimeField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Tree,
  TreeItem
} from '../../../ui/src/components'
import { Card } from './card'
import { componentsClassName } from './components.css'

export function Components() {
  return (
    <div className={`${componentsClassName}`}>
      <Card title="Button">
        <Button>Press me</Button>
      </Card>
      <Card title="ToggleButton">
        <ToggleButton>Pin</ToggleButton>
      </Card>
      <Card title="ToggleButtonGroup">
        <ToggleButtonGroup>
          <ToggleButton id="left">Left</ToggleButton>
          <ToggleButton id="center">Center</ToggleButton>
          <ToggleButton id="right">Right</ToggleButton>
        </ToggleButtonGroup>
      </Card>
      <Card title="GridList">
        <GridList aria-label="Ice cream flavors" selectionMode="multiple">
          <GridListItem>Chocolate</GridListItem>
          <GridListItem>Mint</GridListItem>
          <GridListItem>Strawberry</GridListItem>
          <GridListItem>Vanilla</GridListItem>
        </GridList>
      </Card>
      <Card title="ListBox">
        <ListBox aria-label="Ice cream flavor" selectionMode="single">
          <ListBoxItem>Chocolate</ListBoxItem>
          <ListBoxItem>Mint</ListBoxItem>
          <ListBoxItem>Strawberry</ListBoxItem>
          <ListBoxItem>Vanilla</ListBoxItem>
        </ListBox>
      </Card>
      <Card title="Menu">
        <Menu label="Edit">
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </Card>
      <Card title="Table" style={{ width: '26rem' }}>
        <Table aria-label="Files" selectionMode="multiple">
          <TableHeader>
            <Column isRowHeader>Name</Column>
            <Column>Type</Column>
            <Column>Date Modified</Column>
          </TableHeader>
          <TableBody>
            <Row>
              <Cell>Games</Cell>
              <Cell>File folder</Cell>
              <Cell>6/7/2020</Cell>
            </Row>
            <Row>
              <Cell>Program Files</Cell>
              <Cell>File folder</Cell>
              <Cell>4/7/2021</Cell>
            </Row>
            <Row>
              <Cell>bootmgr</Cell>
              <Cell>System file</Cell>
              <Cell>11/20/2010</Cell>
            </Row>
            <Row>
              <Cell>log.txt</Cell>
              <Cell>Text Document</Cell>
              <Cell>1/18/2016</Cell>
            </Row>
          </TableBody>
        </Table>
      </Card>
      <Card title="TagGroup">
        <TagGroup selectionMode="multiple">
          <Tag>Chocolate</Tag>
          <Tag>Mint</Tag>
          <Tag>Strawberry</Tag>
          <Tag>Vanilla</Tag>
        </TagGroup>
      </Card>
      <Card title="Tree">
        <Tree aria-label="Files" style={{ height: '300px' }} defaultExpandedKeys={['documents', 'photos', 'project']}>
          <TreeItem title="Documents">
            <TreeItem title="Project">
              <TreeItem title="Weekly Report" />
            </TreeItem>
          </TreeItem>
          <TreeItem title="Photos">
            <TreeItem title="Image 1" />
            <TreeItem title="Image 2" />
          </TreeItem>
        </Tree>
      </Card>
      <Card title="ColorArea">
        <ColorArea>
          <ColorThumb />
        </ColorArea>
      </Card>
      <Card title="ColorField">
        <ColorField label="Color" />
      </Card>
      <Card title="ColorPicker">
        <ColorPicker label="Fill color" defaultValue="#f00" />
      </Card>
      <Card title="ColorSlider">
        <ColorSlider label="Red Opacity" defaultValue="#f00" channel="alpha" />
      </Card>
      <Card title="ColorSwatch">
        <ColorSwatch color="#f00" />
      </Card>
      <Card title="ColorSwatchPicker">
        <ColorSwatchPicker>
          <ColorSwatchPickerItem color="#A00" />
          <ColorSwatchPickerItem color="#f80" />
          <ColorSwatchPickerItem color="#080" />
          <ColorSwatchPickerItem color="#08f" />
          <ColorSwatchPickerItem color="#088" />
          <ColorSwatchPickerItem color="#008" />
        </ColorSwatchPicker>
      </Card>
      <Card title="ColorWheel">
        <ColorWheel defaultValue="hsl(30, 100%, 50%)" />
      </Card>
      <Card title="Calendar">
        <Calendar aria-label="Event date" />
      </Card>
      <Card title="DateField">
        <DateField label="Event date" />
      </Card>
      <Card title="DatePicker">
        <DatePicker label="Event date" />
      </Card>
      <Card title="DateRangePicker">
        <DateRangePicker label="Event date" />
      </Card>
      <Card title="RangeCalendar">
        <RangeCalendar aria-label="Trip dates" />
      </Card>
      <Card title="TimeField">
        <TimeField label="Event time" />
      </Card>
      <Card title="Checkbox">
        <Checkbox>Unsubscribe</Checkbox>
      </Card>
      <Card title="CheckboxGroup">
        <CheckboxGroup label="Favorite sports">
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroup>
      </Card>
      <Card title="NumberField">
        <NumberField label="Cookies" />
      </Card>
      <Card title="RadioGroup">
        <RadioGroup label="Favorite sport">
          <Radio value="soccer">Soccer</Radio>
          <Radio value="baseball">Baseball</Radio>
          <Radio value="basketball">Basketball</Radio>
        </RadioGroup>
      </Card>
      <Card title="SearchField">
        <SearchField label="Search" />
      </Card>
      <Card title="Slider">
        <Slider label="Range" defaultValue={[30, 60]} thumbLabels={['start', 'end']} />
      </Card>
      <Card title="Switch">
        <Switch>Wi-Fi</Switch>
      </Card>
      <Card title="TextField">
        <TextField label="Name" />
      </Card>
      <Card title="Breadcrumbs">
        <Breadcrumbs>
          <Breadcrumb>
            <Link href="/">Home</Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link href="/react-aria/">React Aria</Link>
          </Breadcrumb>
          <Breadcrumb>
            <Link>Breadcrumbs</Link>
          </Breadcrumb>
        </Breadcrumbs>
      </Card>
      <Card title="Disclosure">
        <Disclosure title="Manage your account">Details on managing your account</Disclosure>
      </Card>
      <Card title="Link">
        <Link href="https://www.imdb.com/title/tt6348138/" target="_blank">
          The missing link
        </Link>
      </Card>
      <Card title="Tabs" style={{ width: '26rem' }}>
        <Tabs>
          <TabList aria-label="History of Ancient Rome">
            <Tab id="FoR">Founding of Rome</Tab>
            <Tab id="MaR">Monarchy and Republic</Tab>
            <Tab id="Emp">Empire</Tab>
          </TabList>
          <TabPanel id="FoR">Arma virumque cano, Troiae qui primus ab oris.</TabPanel>
          <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
          <TabPanel id="Emp">Alea jacta est.</TabPanel>
        </Tabs>
      </Card>
      <Card title="Dialog">
        <DialogTrigger>
          <Button>Sign up</Button>
          <Modal>
            <Dialog>
              <form>
                <Heading slot="title">Sign up</Heading>
                <TextField autoFocus label="First Name" />
                <TextField label="Last Name" />
                <Button slot="close" style={{ marginTop: 8 }}>
                  Submit
                </Button>
              </form>
            </Dialog>
          </Modal>
        </DialogTrigger>
      </Card>
      <Card title="Popover">
        <DialogTrigger>
          <Button aria-label="Help">❕</Button>
          <Popover>
            <Heading slot="title">Help</Heading>
            <p>For help accessing your account, please contact support.</p>
          </Popover>
        </DialogTrigger>
      </Card>
      <Card title="Tooltip">
        <TooltipTrigger>
          <Button>💾</Button>
          <Tooltip>Save</Tooltip>
        </TooltipTrigger>
      </Card>
      <Card title="Autocomplete">
        <Autocomplete label="Commands" placeholder="Search commands...">
          <MenuItem>Create new file...</MenuItem>
          <MenuItem>Create new folder...</MenuItem>
          <MenuItem>Assign to...</MenuItem>
          <MenuItem>Assign to me</MenuItem>
          <MenuItem>Change status...</MenuItem>
          <MenuItem>Change priority...</MenuItem>
          <MenuItem>Add label...</MenuItem>
          <MenuItem>Remove label...</MenuItem>
        </Autocomplete>
      </Card>
      <Card title="ComboBox">
        <ComboBox label="Ice cream flavor">
          <ListBoxItem>Chocolate</ListBoxItem>
          <ListBoxItem>Mint</ListBoxItem>
          <ListBoxItem>Strawberry</ListBoxItem>
          <ListBoxItem>Vanilla</ListBoxItem>
        </ComboBox>
      </Card>
      <Card title="Select">
        <Select label="Ice cream flavor">
          <ListBoxItem>Chocolate</ListBoxItem>
          <ListBoxItem>Mint</ListBoxItem>
          <ListBoxItem>Strawberry</ListBoxItem>
          <ListBoxItem>Vanilla</ListBoxItem>
        </Select>
      </Card>
      <Card title="Meter">
        <Meter label="Storage space" value={80} />
      </Card>
      <Card title="ProgressBar">
        <ProgressBar label="Loading..." value={80} />
      </Card>
      <Card title="Group">
        <RACTextField className={textFieldClassName}>
          <Label>Email</Label>
          <Group>
            <Input />
            <Button aria-label="Add email">+</Button>
          </Group>
        </RACTextField>
      </Card>
      <Card title="Toolbar" style={{ width: '32rem' }}>
        <Toolbar aria-label="Text formatting">
          <Group aria-label="Style">
            <ToggleButton aria-label="Bold">
              <b>B</b>
            </ToggleButton>
            <ToggleButton aria-label="Italic">
              <i>I</i>
            </ToggleButton>
            <ToggleButton aria-label="Underline">
              <u>U</u>
            </ToggleButton>
          </Group>
          <Separator orientation="vertical" />
          <Group aria-label="Clipboard">
            <Button>Copy</Button>
            <Button>Paste</Button>
            <Button>Cut</Button>
          </Group>
          <Separator orientation="vertical" />
          <Checkbox>Night Mode</Checkbox>
        </Toolbar>
      </Card>
    </div>
  )
}
