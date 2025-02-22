(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",a="hour",l="day",r="week",o="month",v="quarter",p="year",c="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},m={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),a=n-s<0,l=t.clone().add(i+(a?-1:1),o);return+(-(i+(n-s)/(a?s-l:l-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:p,w:r,d:l,D:c,h:a,m:s,s:i,ms:n,Q:v}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=f;var g=function(e){return e instanceof D},$=function e(t,n,i){var s;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(s=a),n&&(b[a]=n,s=a);var l=t.split("-");if(!s&&l.length>1)return e(l[0])}else{var r=t.name;b[r]=t,s=r}return!i&&s&&(y=s),s||!i&&y},M=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},S=m;S.l=$,S.i=g,S.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=$(e.locale,null,!0),this.parse(e)}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(S.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(d);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return S},h.isValid=function(){return!(this.$d.toString()===u)},h.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return M(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<M(e)},h.$g=function(e,t,n){return S.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,v=!!S.u(t)||t,u=S.p(e),d=function(e,t){var i=S.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return v?i:i.endOf(l)},_=function(e,t){return S.w(n.toDate()[e].apply(n.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,h=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case p:return v?d(1,0):d(31,11);case o:return v?d(1,h):d(0,h+1);case r:var b=this.$locale().weekStart||0,g=(f<b?f+7:f)-b;return d(v?m-g:m+(6-g),h);case l:case c:return _(y+"Hours",0);case a:return _(y+"Minutes",1);case s:return _(y+"Seconds",2);case i:return _(y+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var r,v=S.p(e),u="set"+(this.$u?"UTC":""),d=(r={},r[l]=u+"Date",r[c]=u+"Date",r[o]=u+"Month",r[p]=u+"FullYear",r[a]=u+"Hours",r[s]=u+"Minutes",r[i]=u+"Seconds",r[n]=u+"Milliseconds",r)[v],_=v===l?this.$D+(t-this.$W):t;if(v===o||v===p){var f=this.clone().set(c,1);f.$d[d](_),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else d&&this.$d[d](_);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[S.p(e)]()},h.add=function(n,v){var c,u=this;n=Number(n);var d=S.p(v),_=function(e){var t=M(u);return S.w(t.date(t.date()+Math.round(e*n)),u)};if(d===o)return this.set(o,this.$M+n);if(d===p)return this.set(p,this.$y+n);if(d===l)return _(1);if(d===r)return _(7);var f=(c={},c[s]=e,c[a]=t,c[i]=1e3,c)[d]||1,h=this.$d.getTime()+n*f;return S.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=S.z(this),a=this.$H,l=this.$m,r=this.$M,o=n.weekdays,v=n.months,p=function(e,n,s,a){return e&&(e[n]||e(t,i))||s[n].slice(0,a)},c=function(e){return S.s(a%12||12,e,"0")},d=n.meridiem||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:r+1,MM:S.s(r+1,2,"0"),MMM:p(n.monthsShort,r,v,3),MMMM:p(v,r),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:p(n.weekdaysMin,this.$W,o,2),ddd:p(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(a),HH:S.s(a,2,"0"),h:c(1),hh:c(2),a:d(a,l,!0),A:d(a,l,!1),m:String(l),mm:S.s(l,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:s};return i.replace(_,(function(e,t){return t||f[e]||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,c,u){var d,_=S.p(c),f=M(n),h=(f.utcOffset()-this.utcOffset())*e,m=this-f,y=S.m(this,f);return y=(d={},d[p]=y/12,d[o]=y,d[v]=y/3,d[r]=(m-h)/6048e5,d[l]=(m-h)/864e5,d[a]=m/t,d[s]=m/e,d[i]=m/1e3,d)[_]||m,u?y:S.a(y)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return b[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=$(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return S.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),w=D.prototype;return M.prototype=w,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",l],["$M",o],["$y",p],["$D",c]].forEach((function(e){w[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,D,M),e.$i=!0),M},M.locale=$,M.isDayjs=g,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class i{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n            <div class="trip-filters__filter">\n              <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n              <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n              <label class="trip-filters__filter-label" for="filter-future">Future</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n              <label class="trip-filters__filter-label" for="filter-present">Present</label>\n            </div>\n\n            <div class="trip-filters__filter">\n              <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n              <label class="trip-filters__filter-label" for="filter-past">Past</label>\n            </div>\n\n            <button class="visually-hidden" type="submit">Accept filter</button>\n          </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class s{getTemplate(){return'<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n\n                <div class="event__type-item">\n                  <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                  <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                  <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                  <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                  <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                  <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                  <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                  <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                  <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                </div>\n\n                <div class="event__type-item">\n                  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              Flight\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n            <datalist id="destination-list-1">\n              <option value="Amsterdam"></option>\n              <option value="Geneva"></option>\n              <option value="Chamonix"></option>\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Cancel</button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                <label class="event__offer-label" for="event-offer-luggage-1">\n                  <span class="event__offer-title">Add luggage</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">30</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                <label class="event__offer-label" for="event-offer-comfort-1">\n                  <span class="event__offer-title">Switch to comfort class</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">100</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                <label class="event__offer-label" for="event-offer-meal-1">\n                  <span class="event__offer-title">Add meal</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">15</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                <label class="event__offer-label" for="event-offer-seats-1">\n                  <span class="event__offer-title">Choose seats</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">5</span>\n                </label>\n              </div>\n\n              <div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                <label class="event__offer-label" for="event-offer-train-1">\n                  <span class="event__offer-title">Travel by train</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">40</span>\n                </label>\n              </div>\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n            <div class="event__photos-container">\n              <div class="event__photos-tape">\n                <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n                <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n              </div>\n            </div>\n          </section>\n        </section>\n      </form>\n    </li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}var a=n(484),l=n.n(a);const r=e=>e[Math.floor(Math.random()*e.length)],o=(e,t)=>{const n=Math.ceil(Math.min(e,t)),i=Math.floor(Math.max(e,t));return Math.floor(Math.random()*(i-n+1)+n)},v=e=>l()(e).format("HH:mm"),p=e=>l()(e).format("MMM DD"),c=e=>l()(e).format("DD/MM/YY HH:mm"),u=["Berlin","Stuttgart","Minsk","Köln","London","Lissabon","Irkutsk","Sydney"],d=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],_=["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Cras aliquet varius magna, non porta ligula feugiat eget.","Fusce tristique felis at fermentum pharetra.","Aliquam id orci ut lectus varius viverra.","Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.","Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.","Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.","Sed sed nisi sed augue convallis suscipit in sed felis.","Aliquam erat volutpat.","Nunc fermentum tortor ac porta dapibus.","In rutrum ac purus sit amet tempus."],f=["Rent a car","Add luggage","Add breakfast","Switch to business","Upgrade to business class"];class h{constructor({point:e}){this.point=e}getTemplate(){return(e=>{const{eventType:t,destination:n,startDatetime:i,endDatetime:s,price:a,offers:l}=e,r=c(i),o=c(s);return`<li class="trip-events__item">\n      <form class="event event--edit" action="#" method="post">\n        <header class="event__header">\n          <div class="event__type-wrapper">\n            <label class="event__type  event__type-btn" for="event-type-toggle-1">\n              <span class="visually-hidden">Choose event type</span>\n              <img class="event__type-icon" width="17" height="17" src="img/icons/${t.toLowerCase()}.png" alt="Event type icon">\n            </label>\n            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n            <div class="event__type-list">\n              <fieldset class="event__type-group">\n                <legend class="visually-hidden">Event type</legend>\n                ${d.map((e=>`<div class="event__type-item">\n                  <input id="event-type-${e.toLowerCase()}-1" class="event__${e.toLowerCase()}-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}">\n                  <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n                </div>`)).join("")};\n              </fieldset>\n            </div>\n          </div>\n\n          <div class="event__field-group  event__field-group--destination">\n            <label class="event__label  event__type-output" for="event-destination-1">\n              ${t}\n            </label>\n            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${n.city}" list="destination-list-1">\n            <datalist id="destination-list-1">\n              ${u.map((e=>`<option value="${e}"></option>`)).join("")};\n            </datalist>\n          </div>\n\n          <div class="event__field-group  event__field-group--time">\n            <label class="visually-hidden" for="event-start-time-1">From</label>\n            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${r}">\n            &mdash;\n            <label class="visually-hidden" for="event-end-time-1">To</label>\n            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${o}">\n          </div>\n\n          <div class="event__field-group  event__field-group--price">\n            <label class="event__label" for="event-price-1">\n              <span class="visually-hidden">Price</span>\n              &euro;\n            </label>\n            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${a}">\n          </div>\n\n          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n          <button class="event__reset-btn" type="reset">Delete</button>\n          <button class="event__rollup-btn" type="button">\n            <span class="visually-hidden">Open event</span>\n          </button>\n        </header>\n        <section class="event__details">\n          <section class="event__section  event__section--offers">\n            <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n            <div class="event__available-offers">\n              ${l.map((e=>`<div class="event__offer-selector">\n                <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.title.toLowerCase()}-1" type="checkbox" name="event-offer-${e.title.toLowerCase()}" checked>\n                <label class="event__offer-label" for="event-offer-${e.title.toLowerCase()}-1">\n                  <span class="event__offer-title">${e.title}</span>\n                  &plus;&euro;&nbsp;\n                  <span class="event__offer-price">${e.price}</span>\n                </label>\n              </div>`)).join("")}\n            </div>\n          </section>\n\n          <section class="event__section  event__section--destination">\n            <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n            <p class="event__destination-description">${n.description}</p>\n          </section>\n        </section>\n      </form>\n    </li>`})(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class m{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class y{constructor({point:e}){this.point=e}getTemplate(){return(e=>{const{eventType:t,destination:n,startDatetime:i,endDatetime:s,price:a,offers:r,isFavorite:o}=e,c=p(i),u=p(s),d=v(i),_=v(s),f=((e,t)=>{const n=l()(e),i=l()(t);let s=Math.abs(i.diff(n,"minute"));const a=Math.floor(s/1440);s-=24*a*60;const r=Math.floor(s/60),o=s%60;return a>0?`${String(a).padStart(2,"0")}D ${String(r).padStart(2,"0")}H ${String(o).padStart(2,"0")}M`:r>0?`${String(r).padStart(2,"0")}H ${String(o).padStart(2,"0")}M`:`${String(o).padStart(2,"0")}M`})(i,s);return`<li class="trip-events__item">\n      <div class="event">\n        <time class="event__date" datetime="${i}">${c}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${t.toLowerCase()}.png" alt="Event type icon">\n        </div>\n        <h3 class="event__title">${t} ${n.city}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${i}">${d} ${c===u?"":c}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${s}">${_} ${c===u?"":u}</time>\n          </p>\n          <p class="event__duration">${f}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${a}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        <ul class="event__selected-offers">\n          ${r.map((e=>`<li class="event__offer">\n            <span class="event__offer-title">${e.title}</span>\n            &plus;&euro;&nbsp;\n            <span class="event__offer-price">${e.price}</span>\n          </li>`)).join("")}\n        </ul>\n        <button class="event__favorite-btn  ${o?"event__favorite-btn--active":""}" type="button">\n          <span class="visually-hidden">Add to favorite</span>\n          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n          </svg>\n        </button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>\n    </li>`})(this.point)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class b{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" checked>\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}function g(){return{type:r(d),title:r(f),price:o(10,2e3)}}const $=()=>{const e=(()=>{const e=new Date;e.setDate(e.getDate()-Math.floor(365*Math.random())),e.setHours(Math.floor(24*Math.random())),e.setMinutes(Math.floor(60*Math.random())),e.setSeconds(0);const t=new Date(e),n=Math.floor(4*Math.random());return t.setDate(e.getDate()+n),t.setHours(Math.floor(24*Math.random())),t.setMinutes(Math.floor(60*Math.random())),[e,t]})();return{eventType:r(d),destination:{description:Array.from({length:o(1,5)},(()=>r(_))).join(" "),city:r(u),pictures:Array.from({length:o(1,5)},(()=>`https://loremflickr.com/248/152?random=${o(1,1e3)}`))},startDatetime:e[0],endDatetime:e[1],price:o(2e3,5e3),offers:Array.from({length:o(1,5)},g),isFavorite:Boolean(o(0,1))}},M=document.querySelector(".trip-controls__filters"),S=document.querySelector(".trip-events"),D=new class{allPoints=Array.from({length:5},$);getPoints(){return this.allPoints}},w=new class{PointRouteListPart=new m;constructor(e,t,n){this.tripEvents=t,this.tripControlFilters=e,this.pointsModel=n}init(){this.allPoints=[...this.pointsModel.getPoints()],t(new i,this.tripControlFilters),t(new b,this.tripEvents),t(this.PointRouteListPart,this.tripEvents),t(new h({point:this.allPoints[0]}),this.PointRouteListPart.getElement());for(let e=0;e<this.allPoints.length;e++)t(new y({point:this.allPoints[e]}),this.PointRouteListPart.getElement());t(new s,this.PointRouteListPart.getElement())}}(M,S,D);w.init()})()})();
//# sourceMappingURL=bundle.0534ab3545a9d7c3d42d.js.map