function setupContextMenu() {
  chrome.contextMenus.create({
    id: 'syncExp',
    title: 'Sync Exp',
    contexts: ['editable'],
  });
}

chrome.runtime.onInstalled.addListener(() => {
  setupContextMenu();
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: insertExpLink,
  });
});

function insertExpLink() {
  const pageTitle = document.title;
  const pageUrl = window.location.href;
  const activeElement = document.activeElement;

  // 현재 활성화된 요소가 contenteditable 요소인지 확인합니다.
  if (activeElement.isContentEditable) {
    // URL과 데이터 정의
    const url = 'http://localhost:3000/api/campaigns';
    const data = {
      title: pageTitle,
      url: pageUrl,
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(({ campaignId }) => {
        const selection = window.getSelection();
        const range =
          selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : document.createRange();

        // 삽입할 텍스트를 생성합니다.
        const textNode = document.createTextNode(campaignId);
        range.deleteContents();
        range.insertNode(textNode);

        // 삽입 후 새로운 커서 위치를 설정합니다.
        range.setStartAfter(textNode);
        range.setEndAfter(textNode);
        selection.removeAllRanges();
        selection.addRange(range);
      });
  }
}
