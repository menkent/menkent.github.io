(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"/EMn":function(e,t,r){"use strict";r.d(t,"a",function(){return d});var i=r("tnAE"),n=r("5163"),o=r("lg7r"),s=r("26FU"),a=r("F/XL"),c=r("T6aq"),u=r("67Y/"),p=r("4RxG"),f=r("CcnG"),d=function(){function e(e,t){this.rest=e,this.userInfo=t,this.isLoadTrainingsForUser="",this.isLoadExercisesForUser="",this._trainings=new s.a([]),this.trainings$=this._trainings.asObservable(),this._exercises=new s.a([]),this.exercises$=this._exercises.asObservable(),console.log("ProgramsService:: INIT"),this.getProgramComplex().subscribe()}return Object.defineProperty(e.prototype,"programComplexes",{get:function(){var e=this.userInfo.user;return e&&e.programComplexes||[]},set:function(e){var t=this.userInfo.user;t&&(t.programComplexes=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trainings",{get:function(){return this._trainings.value},set:function(e){this._trainings.next(e)},enumerable:!0,configurable:!0}),e.prototype.addTraining=function(e){this.trainings=this.trainings.concat([e])},e.prototype.delTraining=function(e){var t=this.trainings.findIndex(function(t){return t===e});t>=0&&this.trainings.splice(t,1)},Object.defineProperty(e.prototype,"exercises",{get:function(){return this._exercises.value},set:function(e){this._exercises.next(e)},enumerable:!0,configurable:!0}),e.prototype.generateId=function(){return((new Date).getTime()+(100*Math.random()).toFixed(0)).toString()},e.prototype.adjunctionWithID=function(e){return e.id=this.generateId(),e.id},e.prototype.getProgramComplex=function(){return this.rest.fakeCall("",{programComplexes:this.programComplexes})},Object.defineProperty(e.prototype,"localStorageUserName",{get:function(){return"user_"+(this.userInfo.user&&this.userInfo.user.id)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"localStorageUserNameForExercises",{get:function(){return"exercises_user_"+(this.userInfo.user&&this.userInfo.user.id)},enumerable:!0,configurable:!0}),e.prototype.saveTraining=function(){var e=JSON.stringify(this.trainings.map(function(e){var t=e.toMap();return t.protoTraining=e.protoTraining.id,t.protoTrainig=e.protoTraining.id,t.exercises=e.exercises.map(function(e){var t=e.toMap();return t.protoLink=e.protoLink.id,t}),t}));return localStorage.setItem(this.localStorageUserName,e),Object(a.a)(!0)},e.prototype.loadTrainings=function(){var e=this;if(this.isLoadTrainingsForUser===(this.userInfo.user&&this.userInfo.user.id))return Object(a.a)(this.trainings);var t=localStorage.getItem(this.localStorageUserName);if(this.isLoadTrainingsForUser=this.userInfo.user&&this.userInfo.user.id||"",t){var r=JSON.parse(t).map(function(t){var r=e.getProtoTrainingById(t.protoTrainig||t.protoTraining);delete t.protoTraining,delete t.protoTrainig,t.exercises=t.exercises.map(function(e){if(e.protoLink instanceof Object)return e;var t=e.protoLink,i=r.exercises.find(function(e){return e.id===t});return i&&(e.protoLink=i.toMap()),e});var i=new n.a(t);return i.protoTraining=r,i});this.trainings=r}else this.trainings=[];return Object(a.a)(this.trainings)},e.prototype.getProtoTrainingById=function(e){return this.programComplexes.reduce(function(e,t){return e.concat(t.protoTrainings)},[]).find(function(t){return t.id===e})},e.prototype.getTrainingById=function(e){return this.loadTrainings().pipe(Object(u.a)(function(t){return t.find(function(t){return t.id===e})}))},e.prototype.loadProtoExercises=function(){if(this.isLoadExercisesForUser===(this.userInfo.user&&this.userInfo.user.id))return Object(a.a)(this.exercises);var e=localStorage.getItem(this.localStorageUserNameForExercises);this.isLoadExercisesForUser=this.userInfo.user&&this.userInfo.user.id||"";var t=[];return e&&(t=JSON.parse(e).map(function(e){return new c.a(e)})),this.exercises=t.concat(Object(p.e)()),Object(a.a)(this.exercises)},e.prototype.saveProtoExercises=function(){var e=Object(p.e)(),t=this.exercises.filter(function(t){return!e.find(function(e){return e.id===t.id})});console.log("exercises to save:",t,e.length,this.exercises.length);var r=JSON.stringify(t.map(function(e){return e.toMap()}));return localStorage.setItem(this.localStorageUserNameForExercises,r),Object(a.a)(!0)},e.prototype.getProtoExerciseById=function(e){return this.loadProtoExercises().pipe(Object(u.a)(function(t){return t.find(function(t){return t.id===e})}))},e.prototype.addProtoExercise=function(e){var t=this.exercises.findIndex(function(t){return t.id===e.id});t>=0?this.exercises[t]=e:this.exercises=[e].concat(this.exercises)},e.prototype.delProtoExercise=function(e){var t=this.exercises.findIndex(function(t){return t.id===e.id});t>=0&&this.exercises.splice(t,1)},e.prototype.addProgramComplex=function(e){var t=this.programComplexes.findIndex(function(t){return t.id===e.id});t>=0?this.programComplexes[t]=e:this.programComplexes=[e].concat(this.programComplexes)},e.prototype.delProgramComplex=function(e){var t=this.programComplexes.findIndex(function(t){return t.id===e.id});t>=0&&this.programComplexes.splice(t,1)},e.ngInjectableDef=f.T({factory:function(){return new e(f.X(i.a),f.X(o.a))},token:e,providedIn:"root"}),e}()},LC5p:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});var i=r("n6gG"),n=function(){function e(){this._vertical=!1,this._inset=!1}return Object.defineProperty(e.prototype,"vertical",{get:function(){return this._vertical},set:function(e){this._vertical=Object(i.b)(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"inset",{get:function(){return this._inset},set:function(e){this._inset=Object(i.b)(e)},enumerable:!0,configurable:!0}),e}(),o=function(){return function(){}}()},TtEo:function(e,t,r){"use strict";r.d(t,"a",function(){return n}),r.d(t,"b",function(){return o});var i=r("CcnG"),n=(r("LC5p"),r("Ip0R"),r("Fzqc"),r("Wf4p"),r("ZYjt"),i.ob({encapsulation:2,styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],data:{}}));function o(e){return i.Jb(2,[],null,null)}},oZBs:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var i=r("z+q4"),n=r("CcnG"),o=r("o3x0"),s=function(){function e(e){this.dialog=e}return e.prototype.openDialog=function(e,t){this.dialog.open(i.a,{width:"80%",data:e}).afterClosed().subscribe(function(e){"function"==typeof t&&t(e)})},e.ngInjectableDef=n.T({factory:function(){return new e(n.X(o.e))},token:e,providedIn:"root"}),e}()},u7R8:function(e,t,r){"use strict";r.d(t,"a",function(){return i}),r("mrSG"),r("n6gG"),r("YlbQ"),r("CcnG"),r("gIcY"),r("Wf4p");var i=function(){return function(){}}()}}]);