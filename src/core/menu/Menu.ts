import Submenu from "./Submenu"

export default interface Menu {
    id: number,
    item: string
    submenu: Submenu[]
}