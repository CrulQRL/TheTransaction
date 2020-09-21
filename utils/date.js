import { Months } from 'constants/index';

export const formatDate = inputDate => {
    var spaceSep = inputDate.split(' ');
    var dashSep = spaceSep[0].split('-');
    return `${dashSep[2]} ${Months[dashSep[1]]} ${dashSep[0]}`;
}