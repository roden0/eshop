import { createContext } from 'react';

import SHOP_DATA from './data';

const CollectionsContext = createContext(SHOP_DATA);

export default CollectionsContext;