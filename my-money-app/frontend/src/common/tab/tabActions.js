export const selectTab = tabId => ({
    type: 'TAB_SELECTED',
    payload: tabId
})

export const showTabs = (...tabsId) => {
    const tabsToShow = {}
    tabsId.forEach(tabId => tabsToShow[tabId] = true)

    return ({
        type: 'TAB_SHOWED',
        payload: tabsToShow
    })
}