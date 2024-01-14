// アイテムのJSONデータ
const items = [
    { id: 1, name: 'Healing Potion', price: 50 },
    { id: 2, name: 'Sword of Strength', price: 200 },
    // 他のアイテム...
  ];
  
  // 商店のアイテム欄
  let shopItems = [];
  
  // 複数のIDのアイテムを一括で追加する関数
  function addItemsToShop(itemIds) {
    itemIds.forEach(itemId => {
      const item = items.find(item => item.id === itemId);
      if (item) {
        shopItems.push(item);
      }
    });
  }
  
  // IDが1, 2, 3, 8, 9, 10, 12, 13, 14のアイテムを商店に追加
  addItemsToShop([1, 2, 3, 8, 9, 10, 12, 13, 14]);
  