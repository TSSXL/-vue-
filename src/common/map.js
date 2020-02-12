//创建和初始化地图函数：
export function initMap(){
  createMap();//创建地图
  setMapEvent();//设置地图事件
  addMapControl();//向地图添加控件
  addMapOverlay();//向地图添加覆盖物
  // map.setMapStyle({style:"dark"});
  // map.setMapStyleV2({
  //   styleId: '6ceb21d2a8787ac9b2077a4c57c90af7'
  // });
}
function createMap(){
  map = new window.BMap.Map("map");
  map.centerAndZoom(new window.BMap.Point(121.490719,29.913285),12);
}
function setMapEvent(){
  map.enableScrollWheelZoom();
  map.enableKeyboard();
  map.enableDragging();
  map.enableDoubleClickZoom()
}
function addClickHandler(target,window){
  target.addEventListener("click",function(){
    target.openInfoWindow(window);
  });
}
function addMapOverlay(){
  var markers = [
    {content:"浙江省宁波市梁祝文化公园高新街道高薪大楼5幢1508室",title:"浙江亿安培电器有限公司",imageOffset: {width:-46,height:-21},position:{lat:29.913285,lng:121.490719}}
  ];
  for(var index = 0; index < markers.length; index++ ){
    var point = new window.BMap.Point(markers[index].position.lng,markers[index].position.lat);
    var marker = new window.BMap.Marker(point);
    var label = new window.BMap.Label(markers[index].title,{offset: new window.BMap.Size(25,5)});
    var opts = {
      width: 200,
      title: markers[index].title,
      enableMessage: false
    };
    var infoWindow = new window.BMap.InfoWindow(markers[index].content,opts);
    marker.setLabel(label);
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    addClickHandler(marker,infoWindow);
    map.addOverlay(marker);
  };
}
//向地图添加控件
function addMapControl(){
  var navControl = new window.BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:3});
  map.addControl(navControl);
}
var map;
