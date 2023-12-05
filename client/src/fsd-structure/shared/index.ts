// pure components [tags]

import Aside from "./_html-tags/ui-kit/ui/Aside";
import Body from "./_html-tags/ui-kit/ui/Body";
import Button from "./_html-tags/ui-kit/ui/Button";
import Dialog from "./_html-tags/ui-kit/ui/Dialog";
import Div from "./_html-tags/ui-kit/ui/Div";
import Form from "./_html-tags/ui-kit/ui/Form";
import Header from "./_html-tags/ui-kit/ui/Header";
import { H1, H2, H3, H4, H5, H6 } from "./_html-tags/ui-kit/ui/Headings";
import Hr from "./_html-tags/ui-kit/ui/Hr";
import HTML from "./_html-tags/ui-kit/ui/Html";
import Input from "./_html-tags/ui-kit/ui/Input";
import Label from "./_html-tags/ui-kit/ui/Lable";
import Li from "./_html-tags/ui-kit/ui/Li";
import Main from "./_html-tags/ui-kit/ui/Main";
import Nav from "./_html-tags/ui-kit/ui/Nav";
import NextImage from "./_html-tags/ui-kit/ui/NextImage";
import Option from "./_html-tags/ui-kit/ui/Option";
import Paragraph from "./_html-tags/ui-kit/ui/Paragraph";
import Section from "./_html-tags/ui-kit/ui/Section";
import Select from "./_html-tags/ui-kit/ui/Select";
import TextArea from "./_html-tags/ui-kit/ui/TextArea";
import Ul from "./_html-tags/ui-kit/ui/UL";
import Video from "./_html-tags/ui-kit/ui/Video";

import defineMargins from "./utilities/defineMargins.helper";
import joinClassnames from "./utilities/joinClassnames.helper";
import definePaddings from "./utilities/definePaddings.helper";

export {
    Aside,
    Body,
    Button,
    Dialog,
    Div,
    Form,
    Header,
    H1, H2, H3, H4, H5, H6,
    Hr,
    HTML,
    Input,
    Label,
    Li,
    Main,
    Nav,
    NextImage,
    Option,
    Paragraph,
    Section,
    Select,
    TextArea,
    Ul,
    Video
}

// custom components [tags]

export { CustomButton } from "./ui-kit/CustomButton"
export { CustomHeader } from "./ui-kit/CustomHeader";
export { FilePreviewCard } from "./ui-kit/FilePreviewCard";
export { FilePreviewListItem } from "./ui-kit/FilePreviewListItem";

// api
export { fileTransferApiService} from "./api/fileTransferApiService";
export {
    type FileMetadata,
} from "./api/types/fileTransferApiService";

// helpers
export {
    defineMargins,
    joinClassnames,
    definePaddings
}

export { type HProps } from "./_html-tags/ui-kit/ui/Headings";