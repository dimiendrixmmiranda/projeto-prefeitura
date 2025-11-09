import Submenu from "./Submenu"

export default interface Menu {
    label: string,
    icone: React.ReactElement
    link?: string
    submenu?: Submenu[]
}