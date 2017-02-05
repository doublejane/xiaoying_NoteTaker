# xiaoying_NoteTaker
A chrome plugin that is designed for "xiaoying" users. Basic function so far is to automatically record the item information of what users have, all with a single click and 2 minutes of waiting.

**Chrome version recommended: 48.0.2564.109 (64-bit)

**Setup:

**Install the plugin by dragging the *.crx file into chrome browser.

**Edit the Startdate value accordingly ("2017-01-03" for example), by default it's one month earlier than the current date, that means only the items within the last 30 days will be recorded.

**Login the XY website with ur own account

**Click "Start" button to begin the recording of item information

**Wait 10-30 sec for the item scan to complete.

**Wait 30-90 sec for the item detail tabs to be opened with instant close, all the details of targeted items will be recorded during this process.

**When the recording process is completed, checked the download information of chrome browser. A file "XY_results" will be saved to your computer.

**Open the downloaded file "XY_results" with notepad or gedit etc, and import them into Excel or LibreOffice by copy-and-paste or relevant buttons therein.

**The format of "XY_results" is: (all separated by Tab)
<item.title> <interest.return.way> <insurance.num> <amount.invested> <item.duration> <startdate> <interest.rate> <enddate> <first.month.income> <second.month.income> <last.month.income>
