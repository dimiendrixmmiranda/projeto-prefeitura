import Menu from "../menu/Menu";
import { listaDeMenus } from "./listaDeMenus";

function filtrarMenus(listaDeMenus: Menu[], idsMenuAcessoRapido: [number, number[]][]) {
    const idsPermitidos = new Map<number, number[]>(idsMenuAcessoRapido as [number, number[]][]);

    return listaDeMenus
        .map(menu => {
            if (!idsPermitidos.has(menu.id)) return null;

            const submenusPermitidos = menu.submenu.filter(submenu =>
                idsPermitidos.get(menu.id)?.includes(submenu.id)
            );

            return submenusPermitidos.length > 0 ? { ...menu, submenu: submenusPermitidos } : null;
        })
        .filter(Boolean);
}

// Definição correta da variável
const idsMenuAcessoRapido: [number, number[]][] = [
    [1, [1, 2]],
    [2, [1, 8]],
    [4, [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12,]],
    [5, [1, 2]],
    [6, [1, 2]],
];

const menusFiltrados = filtrarMenus(listaDeMenus, idsMenuAcessoRapido);

export default menusFiltrados