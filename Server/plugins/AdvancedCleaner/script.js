var isNeedToClean = function (itemStack) {
    if (!itemStack.hasItemMeta()) {
        return true;
    }
    if (itemStack.getEnchantments().size() < 3) {
        return true;
    }
    return false;
};
//返回true清理 返回false则不清理
//如果不懂JavaScript 请不要修改 这里的意思是 有nbt数据或者附魔数量大于3个的 物品 不会清理