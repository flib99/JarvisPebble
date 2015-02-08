/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var ajax = require('ajax');
var Vibe = require('ui/vibe');

var splashWindow = new UI.Window();


var split = [];
var aveSplit = []; 

var temp;
var humidity;
var light;

var aveTemp;
var aveHumidity;
var aveLight;



var text = new UI.Text
({
	position: new Vector2(0,0),
	size: new Vector2(144, 168),
	text: "Downloading data...",
	textAlign: "center",
	backgroundColor: "black"
});

splashWindow.add(text);
splashWindow.show();


var mainMenu = [
	{
		title: "Switches"
	},
	{
		title: "Combo"
	},
	{
		title: "Data"
	},
	{
		title: "TV"
	},
	{
		title: "Plex"
	}
];


var switchArray = [
{
	title: "Red Light On"
},
{
	title: "Red Light Off"
},
{
	title: "Displays On"
},
{
	title: "Displays Off"
},
{
	title: "Backlight On"
},
{
	title: "Backlight Off"
},
{
	title: "Big Light On"
},
{
	title: "Big Light Off"
},
{
	title: "Printer On"
},
{
	title: "Printer Off"
},
];

var comboArray = [
{
	title: "Night"
},
{
	title: "Day"
},
{
	title: "Sleep"
},
{
	title: "Work"
}
];
	
var dataArray = [
{
	title: "Current Data"
},
{
	title: "Historical Data"
}
];
	
var menu = new UI.Menu({
	sections: [{
		title: 'Main Menu',
		items: mainMenu
	}]
});

var switchMenu = new UI.Menu({
	sections: [{
		title: 'Switches',
		items: switchArray
	}]
});

var comboMenu = new UI.Menu({
	sections: [{
		title: 'Combo',
		items: comboArray
	}]
});

var dataMenu = new UI.Menu({
	sections: [{
		title: 'Data',
		items: dataArray
	}]
});

menu.show();
splashWindow.hide();


menu.on('select', function(e) {
	console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
	console.log('The item is titled "' + e.item.title + '"');
	if (e.item.title == "Red Light On")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=1',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Red Light Off")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=5',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Displays On")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=4',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Displays Off")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=8',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	
	else if (e.item.title == "Big Light On")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=2',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Big Light Off")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=6',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Printer On")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=3',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Printer Off")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=7',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Backlight On")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=?',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Backlight Off")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=!',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Night")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=a',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Day")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=b',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Sleep")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=c',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	else if (e.item.title == "Work")
		{
			ajax(
			{
				url: 'http://server.local/auto/power.php?e=d',
				type: "text"
			});
			Vibe.vibrate('double');
			
		}
	
	else if (e.item.title == "Current Data")
		{
			ajax(
			{
				url: "http://server.local/auto/api.php",
				type: "text"
			},
			function(data)
			{
				console.log(data);
				console.log("success");
				split = data.split(',');

				temp = split[0];
				humidity = split[1];
				light = split[2];

				console.log(temp);
			},
			function(error)
			{
				temp = "Unable";
				humidity = "to";
				light = "connect.";
			});
			
			
			var currentArray = [
				{
					title: "Temp: " + temp + "°C"
				},
				{
					title: "Humi: " + humidity + "%"
				},
				{
					title: "Light: " + light + "%"
				}
				];

				var currentMenu = new UI.Menu({
					sections: [{
						title: 'Current Data',
						items: currentArray
					}]
				});
				currentMenu.show();
		}
			
		else if (e.item.title == "Historic Data")
		{
			ajax(
			{
				url: "http://server.local/auto/api.php",
				type: "text"
			},
			function(data)
			{
				console.log(data);
				console.log("success");
				aveSplit = data.split(',');

				aveTemp = aveSplit[3];
				aveHumidity = aveSplit[4];
				aveLight = aveSplit[5];

				
			},
			function(error)
			{
				aveTemp = "Unable";
				aveHumidity = "to";
				aveLight = "connect.";
			});
			
			
			var historicArray = [
				{
					title: "Ave Temp: " + aveTemp + "°C"
				},
				{
					title: "Ave Humi: " + aveHumidity + "%"
				},
				{
					title: "Ave Light: " + aveLight + "%"
				}
				];

				var historicMenu = new UI.Menu({
					sections: [{
						title: 'Historic Data',
						items: historicArray
					}]
				});
				historicMenu.show();
			
			
		}
	else if (e.item.title == "Switches")
		{
			switchMenu.show();
			
		}
	else if (e.item.title == "Combo")
		{
			comboMenu.show();
			
		}
	else if (e.item.title == "Data")
		{
			dataMenu.show();
			
		}
});