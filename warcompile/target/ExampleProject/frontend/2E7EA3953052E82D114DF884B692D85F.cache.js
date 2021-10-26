var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.frontend;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.1";
var $strongName = '2E7EA3953052E82D114DF884B692D85F';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 'object', $intern_1 = 'function', $intern_2 = 'java.lang', $intern_3 = 'application/json', $intern_4 = 'com.exampleproject.gwt.startpoint.client', $intern_5 = 'org.fusesource.restygwt.client', $intern_6 = 'com.google.gwt.user.client.ui', $intern_7 = {7:1, 6:1, 5:1}, $intern_8 = 'com.exampleproject.gwt.startpoint.client.views', $intern_9 = 'cellSpacing', $intern_10 = '\u0440\u0443\u0431.', $intern_11 = {185:1, 89:1}, $intern_12 = 'com.exampleproject.model.shared', $intern_13 = 'com.google.gwt.core.client', $intern_14 = {3:1}, $intern_15 = '__noinit__', $intern_16 = '__java$exception', $intern_17 = {3:1, 4:1}, $intern_18 = 'com.google.gwt.core.client.impl', $intern_19 = 'null', $intern_20 = {3:1, 10:1}, $intern_21 = 'com.google.gwt.dom.client', $intern_22 = 'com.google.web.bindery.event.shared', $intern_23 = 'com.google.gwt.event.shared', $intern_24 = 'com.google.gwt.event.dom.client', $intern_25 = 'click', $intern_26 = {29:1, 3:1, 4:1}, $intern_27 = 'UmbrellaException', $intern_28 = 'com.google.gwt.http.client', $intern_29 = 'com.google.gwt.user.client', $intern_30 = {14:1, 3:1, 4:1}, $intern_31 = 'com.google.gwt.json.client', $intern_32 = 'Error parsing JSON: ', $intern_33 = 'com.google.gwt.text.shared.testing', $intern_34 = 'CSS1Compat', $intern_35 = 'load', $intern_36 = 'DOMMouseScroll', $intern_37 = 131072, $intern_38 = 16777216, $intern_39 = 33554432, $intern_40 = 67108864, $intern_41 = '__gwtLastUnhandledEvent', $intern_42 = '__uiObjectID', $intern_43 = 'com.google.gwt.user.client.impl', $intern_44 = {7:1, 12:1, 6:1, 5:1}, $intern_45 = 'Column index: ', $intern_46 = ', Column size: ', $intern_47 = 'cellPadding', $intern_48 = {7:1, 12:1, 36:1, 6:1, 5:1}, $intern_49 = 'com.google.gwt.user.client.ui.impl', $intern_50 = 'gecko1_8', $intern_51 = 'Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (gecko1_8) does not match the runtime user.agent value (', $intern_52 = ').\n', $intern_53 = 'Expect more errors.', $intern_54 = 'java.util', $intern_55 = '_gwt_modCount', $intern_56 = {18:1}, $intern_57 = 'delete', $intern_58 = 'java.util.logging';
var _, com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_ModuleUtils_initFnList, com_google_gwt_lang_CollapsedPropertyHolder_permutationId = -1;
function com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V(propertyName, propertyValue){
  typeof window === $intern_0 && typeof window['$gwt'] === $intern_0 && (window['$gwt'][propertyName] = propertyValue);
}

function com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(errFn, modName, modBase, softPermutationId){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  $moduleName = modName;
  $moduleBase = modBase;
  com_google_gwt_lang_CollapsedPropertyHolder_permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function com_google_gwt_lang_ModuleUtils_ensureModuleInit__V(){
  com_google_gwt_lang_ModuleUtils_initFnList == null && (com_google_gwt_lang_ModuleUtils_initFnList = []);
}

function com_google_gwt_lang_ModuleUtils_addInitFunctions__V(){
  com_google_gwt_lang_ModuleUtils_ensureModuleInit__V();
  var initFnList = com_google_gwt_lang_ModuleUtils_initFnList;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function com_google_gwt_lang_Runtime_typeMarkerFn__V(){
}

function com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(object){
  if (Array.isArray(object) && object.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) {
    return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(object)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(object) >>> 0).toString(16);
  }
  return object.toString();
}

function com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function com_google_gwt_lang_Runtime_emptyMethod__V(){
}

function com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = com_google_gwt_lang_Runtime_prototypesByTypeId, com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0;
  var prototype = prototypesByTypeId[typeId];
  var clazz = prototype instanceof Array?prototype[0]:null;
  if (prototype && !clazz) {
    _ = prototype;
  }
   else {
    _ = (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 && (com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0 = com_google_gwt_lang_Runtime_prototypesByTypeId[superTypeIdOrPrototype]) , com_google_gwt_lang_Runtime_portableObjCreate__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(com_google_gwt_lang_Runtime_createSubclassPrototype__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2_superPrototype_0));
    _.java_lang_Object_castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.java_lang_Object__1_1_1clazz = clazz);
}

function com_google_gwt_lang_Runtime_bootstrap__V(){
  com_google_gwt_lang_Runtime_prototypesByTypeId = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

com_google_gwt_lang_Runtime_bootstrap__V();
function java_lang_Object_Object__V(){
}

function java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(this$static, other){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other):com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.equals__Ljava_lang_Object_2Z(other):com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static === other:com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this$static, other);
}

function java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit:com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit:com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?this$static.java_lang_Object__1_1_1clazz:this$static.java_lang_Object__1_1_1clazz || Array.isArray(this$static) && com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit, 1) || com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit;
}

function java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this$static){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(this$static)?javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this$static):com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(this$static)?com_google_gwt_lang_Cast_round_1int__DI((javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)):com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(this$static)?(javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static)?1231:1237:com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(this$static)?this$static.hashCode__I():com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(this$static)?javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static):com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(1, null, {}, java_lang_Object_Object__V);
_.equals__Ljava_lang_Object_2Z = function java_lang_Object_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.getClass__Ljava_lang_Class_2 = function java_lang_Object_getClass__Ljava_lang_Class_2(){
  return this.java_lang_Object__1_1_1clazz;
}
;
_.hashCode__I = function java_lang_Object_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Object_toString__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(this)) + '@' + (java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals__Ljava_lang_Object_2Z(other);
}
;
_.hashCode = function(){
  return this.hashCode__I();
}
;
_.toString = function(){
  return this.toString__Ljava_lang_String_2();
}
;
function com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  if (com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_stringCastMap[dstId];
  }
   else if (src_0.java_lang_Object_castableTypeMap) {
    return !!src_0.java_lang_Object_castableTypeMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_doubleCastMap[dstId];
  }
   else if (com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0)) {
    return !!com_google_gwt_lang_Cast_booleanCastMap[dstId];
  }
  return false;
}

function com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(src_0, dstId){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId));
  return src_0;
}

function com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0) && !(src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V));
  return src_0;
}

function com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(src_0 == null || com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0));
  return src_0;
}

function com_google_gwt_lang_Cast_hasJavaObjectVirtualDispatch__Ljava_lang_Object_2Z(src_0){
  return !Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId){
  return src_0 != null && com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(src_0, dstId);
}

function com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'boolean';
}

function com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'number';
}

function com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(src_0){
  return src_0 != null && com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0) && !(src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
}

function com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === 'string';
}

function com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(src_0){
  return typeof src_0 === $intern_0 || typeof src_0 === $intern_1;
}

function com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(src_0){
  return src_0 == null?null:src_0;
}

function com_google_gwt_lang_Cast_round_1int__DI(x_0){
  return Math.max(Math.min(x_0, 2147483647), -2147483648) | 0;
}

var com_google_gwt_lang_Cast_booleanCastMap, com_google_gwt_lang_Cast_doubleCastMap, com_google_gwt_lang_Cast_stringCastMap;
function java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static){
  if (this$static.java_lang_Class_typeName != null) {
    return;
  }
  java_lang_Class_initializeNames__Ljava_lang_Class_2V(this$static);
}

function java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this$static);
  return this$static.java_lang_Class_typeName;
}

function java_lang_Class_Class__V(){
  ++java_lang_Class_nextSequentialId;
  this.java_lang_Class_typeName = null;
  this.java_lang_Class_simpleName = null;
  this.java_lang_Class_packageName = null;
  this.java_lang_Class_compoundName = null;
  this.java_lang_Class_canonicalName = null;
  this.java_lang_Class_typeId = null;
  this.java_lang_Class_arrayLiterals = null;
}

function java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_packageName = packageName;
  clazz.java_lang_Class_compoundName = compoundClassName;
  return clazz;
}

function java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2(packageName, compoundClassName, typeId){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  return clazz;
}

function java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = java_lang_Class_createClassObject__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2(packageName, compoundClassName);
  java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz);
  clazz.java_lang_Class_modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClass, dimensions){
  var arrayLiterals = leafClass.java_lang_Class_arrayLiterals = leafClass.java_lang_Class_arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2(dimensions));
}

function java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz){
  if (clazz.isPrimitive__Z()) {
    return null;
  }
  var typeId = clazz.java_lang_Class_typeId;
  return com_google_gwt_lang_Runtime_prototypesByTypeId[typeId];
}

function java_lang_Class_initializeNames__Ljava_lang_Class_2V(clazz){
  if (clazz.isArray__Z()) {
    var componentType = clazz.java_lang_Class_componentType;
    componentType.isPrimitive__Z()?(clazz.java_lang_Class_typeName = '[' + componentType.java_lang_Class_typeId):!componentType.isArray__Z()?(clazz.java_lang_Class_typeName = '[L' + componentType.getName__Ljava_lang_String_2() + ';'):(clazz.java_lang_Class_typeName = '[' + componentType.getName__Ljava_lang_String_2());
    clazz.java_lang_Class_canonicalName = componentType.getCanonicalName__Ljava_lang_String_2() + '[]';
    clazz.java_lang_Class_simpleName = componentType.getSimpleName__Ljava_lang_String_2() + '[]';
    return;
  }
  var packageName = clazz.java_lang_Class_packageName;
  var compoundName = clazz.java_lang_Class_compoundName;
  compoundName = compoundName.split('/');
  clazz.java_lang_Class_typeName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('$', compoundName)]);
  clazz.java_lang_Class_canonicalName = java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', [packageName, java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2('.', compoundName)]);
  clazz.java_lang_Class_simpleName = compoundName[compoundName.length - 1];
}

function java_lang_Class_join__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function java_lang_Class_maybeSetClassLiteral__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2V(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.java_lang_Class_typeId = typeId;
  var prototype = java_lang_Class_getPrototypeForClass__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2(clazz);
  if (!prototype) {
    com_google_gwt_lang_Runtime_prototypesByTypeId[typeId] = [clazz];
    return;
  }
  prototype.java_lang_Object__1_1_1clazz = clazz;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(68, 1, {}, java_lang_Class_Class__V);
_.private$java_lang_Class$createClassLiteralForArray__ILjava_lang_Class_2 = function java_lang_Class_createClassLiteralForArray__ILjava_lang_Class_2(dimensions){
  var clazz;
  clazz = new java_lang_Class_Class__V;
  clazz.java_lang_Class_modifiers = 4;
  dimensions > 1?(clazz.java_lang_Class_componentType = java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(this, dimensions - 1)):(clazz.java_lang_Class_componentType = this);
  return clazz;
}
;
_.getCanonicalName__Ljava_lang_String_2 = function java_lang_Class_getCanonicalName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_canonicalName;
}
;
_.getName__Ljava_lang_String_2 = function java_lang_Class_getName__Ljava_lang_String_2(){
  return java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this);
}
;
_.getSimpleName__Ljava_lang_String_2 = function java_lang_Class_getSimpleName__Ljava_lang_String_2(){
  java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this);
  return this.java_lang_Class_simpleName;
}
;
_.isArray__Z = function java_lang_Class_isArray__Z(){
  return (this.java_lang_Class_modifiers & 4) != 0;
}
;
_.isPrimitive__Z = function java_lang_Class_isPrimitive__Z(){
  return (this.java_lang_Class_modifiers & 1) != 0;
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Class_toString__Ljava_lang_String_2(){
  return ((this.java_lang_Class_modifiers & 2) != 0?'interface ':(this.java_lang_Class_modifiers & 1) != 0?'':'class ') + (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(this) , this.java_lang_Class_typeName);
}
;
_.java_lang_Class_modifiers = 0;
var java_lang_Class_nextSequentialId = 1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Object', 1);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Class_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Class', 68);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static){
  var serviceRoot;
  if (!this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource) {
    serviceRoot = (org_fusesource_restygwt_client_Defaults_$clinit__V() , org_fusesource_restygwt_client_Defaults_$clinit__V() , org_fusesource_restygwt_client_Defaults_serviceRoot);
    this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource = new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V(serviceRoot);
  }
  return this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource;
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectBooks__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, callback){
  var __e, __method;
  __method = org_fusesource_restygwt_client_Resource_$get__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), '/books'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, 'Accept', $intern_3);
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_WorkerClient_1Generated_1RestServiceProxy_1$2__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 14)) {
      __e = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(__e, __e.java_lang_Throwable_detailMessage) + '\n' + __e.java_lang_Throwable_detailMessage);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectGenres__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this$static, callback){
  var __e, __method;
  __method = org_fusesource_restygwt_client_Resource_$get__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$getResource__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Resource_2(this$static), '/genres'));
  com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(__method.org_fusesource_restygwt_client_Method_builder, 'Accept', $intern_3);
  try {
    org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(__method, new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_WorkerClient_1Generated_1RestServiceProxy_1$3__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(__method, callback, __method));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 14)) {
      __e = $e0;
      com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(__e, __e.java_lang_Throwable_detailMessage) + '\n' + __e.java_lang_Throwable_detailMessage);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(123, 1, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V);
_.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_resource = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'WorkerClient_Generated_RestServiceProxy_', 123);
function org_fusesource_restygwt_client_AbstractRequestCallback_$onError__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static, exception){
  this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, exception);
}

function org_fusesource_restygwt_client_AbstractRequestCallback_$onResponseReceived__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(this$static, response){
  var content, e, value_0;
  this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_response = response;
  if (org_fusesource_restygwt_client_Method_$isExpected__Lorg_fusesource_restygwt_client_Method_2IZ(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status)) {
    try {
      com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V));
      !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V)) , 'Received http response for request: ' + this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_httpMethod + ' ' + this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_url);
      content = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText;
      if (content != null && content.length > 0) {
        com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V));
        !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V)) , this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger);
        value_0 = this$static.parseResult__Ljava_lang_Object_2();
      }
       else {
        value_0 = null;
      }
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V));
        !!this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z() && !this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger && (this$static.org_fusesource_restygwt_client_AbstractRequestCallback_logger = (java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit) , new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V)) , java_util_logging_Level_$clinit__V() , java_util_logging_Level_FINE);
        this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, e);
        return;
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
    this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, value_0);
  }
   else {
    this$static.org_fusesource_restygwt_client_AbstractRequestCallback_callback.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(this$static.org_fusesource_restygwt_client_AbstractRequestCallback_method, new org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V((org_fusesource_restygwt_client_Defaults_$clinit__V() , response)));
  }
}

function org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V(method, callback){
  this.org_fusesource_restygwt_client_AbstractRequestCallback_method = method;
  this.org_fusesource_restygwt_client_AbstractRequestCallback_callback = callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(76, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractRequestCallback_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'AbstractRequestCallback', 76);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_2Ljava_util_List_2(this$static){
  var __e;
  try {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2((com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)), (com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_WorkerClient_1Generated_1RestServiceProxy_1$2__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_val$_1_1method4 = val$__method;
  org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V.call(this, $anonymous0, $anonymous1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(124, 76, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_WorkerClient_1Generated_1RestServiceProxy_1$2__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
_.parseResult__Ljava_lang_Object_2 = function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_parseResult__Ljava_lang_Object_2(){
  return com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$2_2Ljava_util_List_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'WorkerClient_Generated_RestServiceProxy_/2', 124);
function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_2Ljava_util_List_2(this$static){
  var __e;
  try {
    return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2((com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(this$static.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_val$_1_1method4.org_fusesource_restygwt_client_Method_response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.responseText)), (com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V() , com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE));
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
      __e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(__e));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_WorkerClient_1Generated_1RestServiceProxy_1$3__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V($anonymous0, $anonymous1, val$__method){
  this.com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_val$_1_1method4 = val$__method;
  org_fusesource_restygwt_client_AbstractRequestCallback_AbstractRequestCallback__Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V.call(this, $anonymous0, $anonymous1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(125, 76, {}, com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_WorkerClient_1Generated_1RestServiceProxy_1$3__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_Method_2Lorg_fusesource_restygwt_client_MethodCallback_2V);
_.parseResult__Ljava_lang_Object_2 = function com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_parseResult__Ljava_lang_Object_2(){
  return com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_$parseResult__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1$3_2Ljava_util_List_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1WorkerClient_11Generated_11RestServiceProxy_11$3_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_4, 'WorkerClient_Generated_RestServiceProxy_/3', 125);
function com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(node, newNode){
  var p = node.parentNode;
  if (!p) {
    return;
  }
  p.insertBefore(newNode, node);
  p.removeChild(node);
}

function com_google_gwt_user_client_ui_UIObject_$resolvePotentialElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__V);
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

function com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
}

function com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2IIV(this$static){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).style['width'] = '200px';
  this$static.com_google_gwt_user_client_ui_UIObject_element.style['height'] = '350px';
}

function com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, eventTypeName){
  com_google_gwt_user_client_DOM_sinkBitlessEvent__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), eventTypeName);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(6, 1, {6:1});
_.resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2 = function com_google_gwt_user_client_ui_UIObject_resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2(){
  return com_google_gwt_user_client_ui_UIObject_$resolvePotentialElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2();
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_user_client_ui_UIObject_toString__Ljava_lang_String_2(){
  if (!this.com_google_gwt_user_client_ui_UIObject_element) {
    return '(null handle)';
  }
  return com_google_gwt_dom_client_DOMImplMozilla_$toString__Lcom_google_gwt_dom_client_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1UIObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'UIObject', 6);
function com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, handler, type_0){
  var typeInt;
  typeInt = com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(type_0.com_google_gwt_event_dom_client_DomEvent$Type_name);
  typeInt == -1?com_google_gwt_user_client_ui_UIObject_$sinkBitlessEvent__Lcom_google_gwt_user_client_ui_UIObject_2Ljava_lang_String_2V(this$static, type_0.com_google_gwt_event_dom_client_DomEvent$Type_name):this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?(com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplMozilla_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, typeInt | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0))):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= typeInt);
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(!this$static.com_google_gwt_user_client_ui_Widget_handlerManager?(this$static.com_google_gwt_user_client_ui_Widget_handlerManager = new com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(this$static)):this$static.com_google_gwt_user_client_ui_Widget_handlerManager, type_0, handler);
}

function com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  !!this$static.com_google_gwt_user_client_ui_Widget_handlerManager && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static.com_google_gwt_user_client_ui_Widget_handlerManager, event_0);
}

function com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  var bitsToAdd;
  if (this$static.isAttached__Z()) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.com_google_gwt_user_client_ui_Widget_attached = true;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static);
  bitsToAdd = this$static.com_google_gwt_user_client_ui_Widget_eventsToSink;
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  bitsToAdd > 0 && this$static.sinkEvents__IV(bitsToAdd);
  this$static.doAttachChildren__V();
  this$static.onLoad__V();
}

function com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this$static, event_0){
  var related;
  switch (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type)) {
    case 16:
    case 32:
      related = com_google_gwt_dom_client_DOMImplMozilla_$eventGetRelatedTarget__Lcom_google_gwt_dom_client_DOMImplMozilla_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(event_0);
      if (!!related && com_google_gwt_dom_client_DOMImplMozilla_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplMozilla_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(this$static.com_google_gwt_user_client_ui_UIObject_element, related)) {
        return;
      }

  }
  com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(event_0, this$static, this$static.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.isAttached__Z()) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.onUnload__V();
  }
   finally {
    try {
      this$static.doDetachChildren__V();
    }
     finally {
      com_google_gwt_user_client_DOM_$clinit__V();
      this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null;
      this$static.com_google_gwt_user_client_ui_Widget_attached = false;
    }
  }
}

function com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Widget_parent) {
    com_google_gwt_user_client_ui_RootPanel_$clinit__V();
    java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, this$static) && com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(this$static);
  }
   else if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(this$static.com_google_gwt_user_client_ui_Widget_parent, 12)) {
    com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_ui_Widget_parent, 12).remove__Lcom_google_gwt_user_client_ui_Widget_2Z(this$static);
  }
   else if (this$static.com_google_gwt_user_client_ui_Widget_parent) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("This widget's parent does not implement HasWidgets"));
  }
}

function com_google_gwt_user_client_ui_Widget_$replaceElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  this$static.com_google_gwt_user_client_ui_Widget_attached && (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element.__listener = null , undefined);
  !!this$static.com_google_gwt_user_client_ui_UIObject_element && com_google_gwt_user_client_ui_UIObject_$replaceNode__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, elem);
  this$static.com_google_gwt_user_client_ui_UIObject_element = elem;
  this$static.com_google_gwt_user_client_ui_Widget_attached && (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(this$static.com_google_gwt_user_client_ui_UIObject_element, this$static));
}

function com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, parent_0){
  var oldParent;
  oldParent = this$static.com_google_gwt_user_client_ui_Widget_parent;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.isAttached__Z() && this$static.onDetach__V();
    }
     finally {
      this$static.com_google_gwt_user_client_ui_Widget_parent = null;
    }
  }
   else {
    if (oldParent) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.com_google_gwt_user_client_ui_Widget_parent = parent_0;
    parent_0.isAttached__Z() && this$static.onAttach__V();
  }
}

function com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, eventBitsToAdd){
  this$static.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?(com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplMozilla_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this$static.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0))):(this$static.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(5, 6, $intern_7);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Widget_doAttachChildren__V(){
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Widget_doDetachChildren__V(){
}
;
_.isAttached__Z = function com_google_gwt_user_client_ui_Widget_isAttached__Z(){
  return this.com_google_gwt_user_client_ui_Widget_attached;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Widget_onAttach__V(){
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Widget_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Widget_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Widget_onLoad__V(){
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_Widget_onUnload__V(){
}
;
_.sinkEvents__IV = function com_google_gwt_user_client_ui_Widget_sinkEvents__IV(eventBitsToAdd){
  com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this, eventBitsToAdd);
}
;
_.com_google_gwt_user_client_ui_Widget_attached = false;
_.com_google_gwt_user_client_ui_Widget_eventsToSink = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Widget', 5);
function com_google_gwt_user_client_ui_Composite_$checkInit__Lcom_google_gwt_user_client_ui_Composite_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_Composite_widget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('initWidget() is not called yet'));
  }
}

function com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, widget){
  var elem;
  if (this$static.com_google_gwt_user_client_ui_Composite_widget) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V('Composite.initWidget() may only be called once.'));
  }
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  elem = (com_google_gwt_user_client_DOM_$clinit__V() , widget.com_google_gwt_user_client_ui_UIObject_element);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this$static, elem);
  (com_google_gwt_user_client_ui_PotentialElement_$clinit__V() , com_google_gwt_user_client_DOM_isPotential__Lcom_google_gwt_core_client_JavaScriptObject_2Z(elem)) && com_google_gwt_user_client_ui_PotentialElement_$setResolver__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2(elem, this$static);
  this$static.com_google_gwt_user_client_ui_Composite_widget = widget;
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(202, 5, $intern_7);
_.isAttached__Z = function com_google_gwt_user_client_ui_Composite_isAttached__Z(){
  if (this.com_google_gwt_user_client_ui_Composite_widget) {
    return this.com_google_gwt_user_client_ui_Composite_widget.com_google_gwt_user_client_ui_Widget_attached;
  }
  return false;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_Composite_onAttach__V(){
  com_google_gwt_user_client_ui_Composite_$checkInit__Lcom_google_gwt_user_client_ui_Composite_2V(this);
  if (this.com_google_gwt_user_client_ui_Widget_eventsToSink != -1) {
    com_google_gwt_user_client_ui_Widget_$sinkEvents__Lcom_google_gwt_user_client_ui_Widget_2IV(this.com_google_gwt_user_client_ui_Composite_widget, this.com_google_gwt_user_client_ui_Widget_eventsToSink);
    this.com_google_gwt_user_client_ui_Widget_eventsToSink = -1;
  }
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_Composite_widget);
  com_google_gwt_user_client_DOM_$clinit__V();
  this.com_google_gwt_user_client_ui_UIObject_element.__listener = this;
}
;
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Composite_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this.com_google_gwt_user_client_ui_Composite_widget, event_0);
}
;
_.onDetach__V = function com_google_gwt_user_client_ui_Composite_onDetach__V(){
  com_google_gwt_user_client_ui_Widget_$onDetach__Lcom_google_gwt_user_client_ui_Widget_2V(this.com_google_gwt_user_client_ui_Composite_widget);
}
;
_.resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2 = function com_google_gwt_user_client_ui_Composite_resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2(){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, com_google_gwt_user_client_ui_UIObject_$resolvePotentialElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2());
  return com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Composite_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Composite', 202);
function com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V(book){
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1FlowPanel1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_FlowPanel_2(new com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_BookPreview_1BookPreviewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V(this)));
  book.com_exampleproject_model_shared_Book_photoUrl == null && com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo, 'https://smvape.com.ua/wp-content/uploads/2018/12/no_photo.jpg');
  com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo, book.com_exampleproject_model_shared_Book_photoUrl);
  com_google_gwt_user_client_ui_UIObject_$setPixelSize__Lcom_google_gwt_user_client_ui_UIObject_2IIV(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_title, book.com_exampleproject_model_shared_Book_title);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_author, book.com_exampleproject_model_shared_Book_authorName + ' ' + book.com_exampleproject_model_shared_Book_authorSurname);
  com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_BookPreview_price, '' + book.com_exampleproject_model_shared_Book_price);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(85, 202, $intern_7, com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookPreview_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'BookPreview', 85);
function com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1FlowPanel1__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_FlowPanel_2(this$static){
  var f_FlowPanel1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_1, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_1;
  f_FlowPanel1 = new com_google_gwt_user_client_ui_FlowPanel_FlowPanel__V;
  com_google_gwt_user_client_ui_FlowPanel_$add__Lcom_google_gwt_user_client_ui_FlowPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_FlowPanel1, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1 = new com_google_gwt_user_client_ui_Image_Image__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_photo = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1photo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Image_2_photo_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1 = new com_google_gwt_user_client_ui_Label_Label__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_title = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1title__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_title_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1 = new com_google_gwt_user_client_ui_Label_Label__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_author = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1author__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_author_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1 = new com_google_gwt_user_client_ui_Label_Label__V , this$static.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_BookPreview_price = com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1 , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1price__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_price_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_1 = new com_google_gwt_user_client_ui_Button_Button__V , (com_google_gwt_user_client_DOM_$clinit__V() , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_1.com_google_gwt_user_client_ui_UIObject_element).textContent = '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443' , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1buyBook__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_buyBook_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0, (com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_1 = new com_google_gwt_user_client_ui_Button_Button__V , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_1.com_google_gwt_user_client_ui_UIObject_element.textContent = '\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435' , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1moreInfo__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_moreInfo_1)) , com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_$build_1f_1VerticalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel2_0));
  return f_FlowPanel1;
}

function com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_BookPreview_1BookPreviewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V(owner){
  this.com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_owner = owner;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(182, 1, {}, com_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl$Widgets_BookPreview_1BookPreviewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_1BookPreviewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_BookPreview_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1BookPreview_11BookPreviewUiBinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'BookPreview_BookPreviewUiBinderImpl/Widgets', 182);
function com_exampleproject_gwt_startpoint_client_views_MainView_MainView__V(){
  this.com_exampleproject_gwt_startpoint_client_views_MainView_grid = new com_google_gwt_user_client_ui_Grid_Grid__IIV;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_client = new com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_WorkerClient_1Generated_1RestServiceProxy_1__V;
  com_google_gwt_user_client_ui_Composite_$initWidget__Lcom_google_gwt_user_client_ui_Composite_2Lcom_google_gwt_user_client_ui_Widget_2V(this, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(new com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_MainView_1MainViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this)));
  com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectGenres__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_client, new com_exampleproject_gwt_startpoint_client_views_MainView$1_MainView$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this));
  com_google_gwt_user_client_ui_ListBox_$setVisibleItemCount__Lcom_google_gwt_user_client_ui_ListBox_2IV(this.com_exampleproject_gwt_startpoint_client_views_MainView_genreList);
  com_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_$selectBooks__Lcom_exampleproject_gwt_startpoint_client_WorkerClient_1Generated_1RestServiceProxy_1_2Lorg_fusesource_restygwt_client_MethodCallback_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_client, new com_exampleproject_gwt_startpoint_client_views_MainView$2_MainView$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this));
  this.com_exampleproject_gwt_startpoint_client_views_MainView_grid.com_google_gwt_user_client_ui_HTMLTable_tableElem['border'] = '5';
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_booksTable, this.com_exampleproject_gwt_startpoint_client_views_MainView_grid);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(90, 202, $intern_7, com_exampleproject_gwt_startpoint_client_views_MainView_MainView__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'MainView', 90);
function com_exampleproject_gwt_startpoint_client_views_MainView$1_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$1_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this$static, list){
  var g, g$iterator;
  for (g$iterator = new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(list); g$iterator.java_util_ArrayList$1_i < g$iterator.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;) {
    g = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(g$iterator), 63);
    com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2IV(this$static.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_genreList, g.com_exampleproject_model_shared_Genre_genre);
  }
}

function com_exampleproject_gwt_startpoint_client_views_MainView$1_MainView$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this$0){
  this.com_exampleproject_gwt_startpoint_client_views_MainView$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(106, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView$1_MainView$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
_.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$1_onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(method, list){
  com_exampleproject_gwt_startpoint_client_views_MainView$1_$onSuccess__Lcom_exampleproject_gwt_startpoint_client_views_MainView$1_2Lorg_fusesource_restygwt_client_Method_2Ljava_util_List_2V(this, list);
}
;
_.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$1_onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(method, throwable){
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(throwable, throwable.getMessage__Ljava_lang_String_2()) + '\n' + throwable.getMessage__Ljava_lang_String_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'MainView/1', 106);
function com_exampleproject_gwt_startpoint_client_views_MainView$2_MainView$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(this$0){
  this.com_exampleproject_gwt_startpoint_client_views_MainView$2_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(107, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView$2_MainView$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
_.onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$2_onSuccess__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Object_2V(method, list){
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView$2_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid, 0, new com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V((javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(1, list.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list.java_util_ArrayList_array[1], 44))));
  com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView$2_this$01.com_exampleproject_gwt_startpoint_client_views_MainView_grid, 1, new com_exampleproject_gwt_startpoint_client_views_BookPreview_BookPreview__Lcom_exampleproject_model_shared_Book_2V((javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(2, list.java_util_ArrayList_array.length) , com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(list.java_util_ArrayList_array[2], 44))));
}
;
_.onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V = function com_exampleproject_gwt_startpoint_client_views_MainView$2_onFailure__Lorg_fusesource_restygwt_client_Method_2Ljava_lang_Throwable_2V(method, throwable){
  com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(throwable, throwable.getMessage__Ljava_lang_String_2()) + '\n' + throwable.getMessage__Ljava_lang_String_2());
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'MainView/2', 107);
function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2(this$static){
  var f_VerticalPanel1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1;
  f_VerticalPanel1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V;
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart) , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart, (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0 = com_google_gwt_user_client_ui_CellPanel_$getWidgetTd__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart) , !!com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0 && (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_td_0['width'] = '1000px' , undefined) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 10 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel2_0));
  com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(f_VerticalPanel1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u0426\u0435\u043D\u0430:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label6__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label6_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u043E\u0442:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label8__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label8_0_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, new com_google_gwt_user_client_ui_TextBox_TextBox__V) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, $intern_10) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label9__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label9_0_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel7__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel7_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0 = new com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u0434\u043E:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label11__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label11_0_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, new com_google_gwt_user_client_ui_TextBox_TextBox__V) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, $intern_10) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label12__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label12_0_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel10__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel10_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel5__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel5_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u0416\u0430\u043D\u0440\u044B:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label14__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label14_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0 = new com_google_gwt_user_client_ui_ListBox_ListBox__V , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_genreList = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1genreList__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_ListBox_2_genreList_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel13__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel13_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0 = new com_google_gwt_user_client_ui_Label_Label__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435:') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1Label16__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Label_2_f_Label16_0_0)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0 = new com_google_gwt_user_client_ui_CheckBox_CheckBox__V , com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0.com_google_gwt_user_client_ui_CheckBox_directionalTextHelper, '\u0421 \u0444\u043E\u0442\u043E') , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1withPhoto__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_CheckBox_2_withPhoto_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 5 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel15__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel15_1)) , com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1 = new com_google_gwt_user_client_ui_Button_Button__V , (com_google_gwt_user_client_DOM_$clinit__V() , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1.com_google_gwt_user_client_ui_UIObject_element).textContent = '\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C' , com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1, this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1sort__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_Button_2_sort_1)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = 10 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1VerticalPanel4__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_f_VerticalPanel4_0_0)) , com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0, (com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0 = new com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V , this$static.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner.com_exampleproject_gwt_startpoint_client_views_MainView_booksTable = com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0 , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1booksTable__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_VerticalPanel_2_booksTable_0_0)) , com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_$build_1f_1HorizontalPanel3__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2Lcom_google_gwt_user_client_ui_HorizontalPanel_2_f_HorizontalPanel3_0));
  return f_VerticalPanel1;
}

function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_MainView_1MainViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V(owner){
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_MainView_1MainViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_MainView_1MainViewUiBinderImpl$Widgets$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_owner = owner;
  this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart = new com_google_gwt_user_client_ui_Button_Button__V;
  com_google_gwt_user_client_ui_ButtonBase_$setText__Lcom_google_gwt_user_client_ui_ButtonBase_2Ljava_lang_String_2V(this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart);
  com_google_gwt_user_client_ui_Widget_$addDomHandler__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_dom_client_DomEvent$Type_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_cart, this.com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_$clinit__V() , com_google_gwt_event_dom_client_ClickEvent_TYPE));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(126, 1, {}, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_MainView_1MainViewUiBinderImpl$Widgets__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl_2Lcom_exampleproject_gwt_startpoint_client_views_MainView_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_11MainViewUiBinderImpl$Widgets_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'MainView_MainViewUiBinderImpl/Widgets', 126);
function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_MainView_1MainViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(127, 1, $intern_11, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_MainView_1MainViewUiBinderImpl$Widgets$1__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$1_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_11MainViewUiBinderImpl$Widgets$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'MainView_MainViewUiBinderImpl/Widgets/1', 127);
function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_MainView_1MainViewUiBinderImpl$Widgets$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(128, 1, $intern_11, com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_MainView_1MainViewUiBinderImpl$Widgets$2__Lcom_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets_2V);
_.onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V = function com_exampleproject_gwt_startpoint_client_views_MainView_1MainViewUiBinderImpl$Widgets$2_onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(event_0){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1gwt_1startpoint_1client_1views_1MainView_11MainViewUiBinderImpl$Widgets$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_8, 'MainView_MainViewUiBinderImpl/Widgets/2', 128);
function com_exampleproject_model_shared_Book_$setAuthorName__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, authorName){
  this$static.com_exampleproject_model_shared_Book_authorName = authorName;
}

function com_exampleproject_model_shared_Book_$setAuthorSurname__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, authorSurname){
  this$static.com_exampleproject_model_shared_Book_authorSurname = authorSurname;
}

function com_exampleproject_model_shared_Book_$setPhotoUrl__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, photoUrl){
  this$static.com_exampleproject_model_shared_Book_photoUrl = photoUrl;
}

function com_exampleproject_model_shared_Book_$setPrice__Lcom_exampleproject_model_shared_Book_2FV(this$static, price){
  this$static.com_exampleproject_model_shared_Book_price = price;
}

function com_exampleproject_model_shared_Book_$setTitle__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(this$static, title_0){
  this$static.com_exampleproject_model_shared_Book_title = title_0;
}

function com_exampleproject_model_shared_Book_Book__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(44, 1, {44:1}, com_exampleproject_model_shared_Book_Book__V);
_.com_exampleproject_model_shared_Book_price = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Book_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Book', 44);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V(){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT = new org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_AbstractJsonEncoderDecoder$5__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT = new org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_AbstractJsonEncoderDecoder$7__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING = new org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_AbstractJsonEncoderDecoder$9__V;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0){
  var array, object;
  array = value_0.isArray__Lcom_google_gwt_json_client_JSONArray_2();
  if (!array) {
    object = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
    if (!object) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json array, but was given: ' + value_0));
    }
    array = new com_google_gwt_json_client_JSONArray_JSONArray__V;
    com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, 0);
    com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(array, 0, object);
  }
  return array;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(value_0, defaultValue){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, 64) || value_0 == null)
    return defaultValue;
  return value_0;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toDouble__Lcom_google_gwt_json_client_JSONValue_2D(value_0){
  var number, val;
  number = value_0.isNumber__Lcom_google_gwt_json_client_JSONNumber_2();
  if (!number) {
    val = value_0.isString__Lcom_google_gwt_json_client_JSONString_2();
    if (val) {
      try {
        return java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(val.com_google_gwt_json_client_JSONString_value);
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 53))
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json number, but was given: ' + value_0));
  }
  return number.com_google_gwt_json_client_JSONNumber_value;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toList__Lcom_google_gwt_json_client_JSONValue_2Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder_2Ljava_util_List_2(value_0, encoder){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  var array, i, rc, size_0;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  array = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_asArray__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONArray_2(value_0);
  rc = new java_util_ArrayList_ArrayList__IV(array.com_google_gwt_json_client_JSONArray_jsArray.length);
  size_0 = array.com_google_gwt_json_client_JSONArray_jsArray.length;
  for (i = 0; i < size_0; i++) {
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(rc, encoder.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(array, i)));
  }
  return rc;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0){
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  var object;
  object = value_0.isObject__Lcom_google_gwt_json_client_JSONObject_2();
  if (!object) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json object, but was given: null'));
  }
  return object;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(217, 1, {});
var org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'AbstractJsonEncoderDecoder', 217);
function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V(){
  com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE = new com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_Book_1Generated_1JsonEncoderDecoder_1__V;
}

function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Book_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_exampleproject_model_shared_Book_Book__V;
  com_exampleproject_model_shared_Book_$setTitle__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'title'))), null)));
  com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'publisher'))), null));
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'pages'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 19);
  com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'description'))), null));
  com_exampleproject_model_shared_Book_$setPrice__Lcom_exampleproject_model_shared_Book_2FV(rc, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_FLOAT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'price'))), new java_lang_Float_Float__FV(0)), 28).java_lang_Float_value);
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_INT , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'qty'))), java_lang_Integer_valueOf__ILjava_lang_Integer_2(0)), 19);
  com_exampleproject_model_shared_Book_$setPhotoUrl__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'photoUrl'))), null)));
  com_exampleproject_model_shared_Book_$setAuthorName__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'authorName'))), null)));
  com_exampleproject_model_shared_Book_$setAuthorSurname__Lcom_exampleproject_model_shared_Book_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'authorSurname'))), null)));
  com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'genre'))), null));
  return rc;
}

function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_Book_1Generated_1JsonEncoderDecoder_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(171, 217, {}, com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_Book_1Generated_1JsonEncoderDecoder_1__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Book_2(value_0);
}
;
var com_exampleproject_model_shared_Book_1Generated_1JsonEncoderDecoder_1_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Book_11Generated_11JsonEncoderDecoder_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Book_Generated_JsonEncoderDecoder_', 171);
function com_exampleproject_model_shared_Genre_$setGenre__Lcom_exampleproject_model_shared_Genre_2Ljava_lang_String_2V(this$static, genre){
  this$static.com_exampleproject_model_shared_Genre_genre = genre;
}

function com_exampleproject_model_shared_Genre_Genre__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(63, 1, {63:1}, com_exampleproject_model_shared_Genre_Genre__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Genre_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Genre', 63);
function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V(){
  com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V();
  com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE = new com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_Genre_1Generated_1JsonEncoderDecoder_1__V;
}

function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Genre_2(value_0){
  var object, rc;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  object = org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toObject__Lcom_google_gwt_json_client_JSONValue_2Lcom_google_gwt_json_client_JSONObject_2(value_0);
  rc = new com_exampleproject_model_shared_Genre_Genre__V;
  com_exampleproject_model_shared_Genre_$setGenre__Lcom_exampleproject_model_shared_Genre_2Ljava_lang_String_2V(rc, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_getValueToSet__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2((org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_$clinit__V() , org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_STRING , com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(object, 'genre'))), null)));
  return rc;
}

function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_Genre_1Generated_1JsonEncoderDecoder_1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(170, 217, {}, com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_Genre_1Generated_1JsonEncoderDecoder_1__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_$decode__Lcom_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_2Lcom_google_gwt_json_client_JSONValue_2Lcom_exampleproject_model_shared_Genre_2(value_0);
}
;
var com_exampleproject_model_shared_Genre_1Generated_1JsonEncoderDecoder_1_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1exampleproject_1model_1shared_1Genre_11Generated_11JsonEncoderDecoder_11_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_12, 'Genre_Generated_JsonEncoderDecoder_', 170);
function com_google_gwt_core_client_Duration_Duration__V(){
  this.com_google_gwt_core_client_Duration_start = com_google_gwt_core_client_JsDate_now__D();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(136, 1, {}, com_google_gwt_core_client_Duration_Duration__V);
_.com_google_gwt_core_client_Duration_start = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Duration_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Duration', 136);
function java_lang_Throwable_$addSuppressed__Ljava_lang_Throwable_2Ljava_lang_Throwable_2V(this$static, exception){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(exception);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.java_lang_Throwable_disableSuppression) {
    return;
  }
  this$static.java_lang_Throwable_suppressedExceptions == null?(this$static.java_lang_Throwable_suppressedExceptions = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit, 1), $intern_14, 4, 0, [exception])):(this$static.java_lang_Throwable_suppressedExceptions[this$static.java_lang_Throwable_suppressedExceptions.length] = exception);
}

function java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static){
  this$static.java_lang_Throwable_writetableStackTrace && this$static.java_lang_Throwable_backingJsObject !== $intern_15 && this$static.private$java_lang_Throwable$initializeBackingError__V();
  return this$static;
}

function java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this$static, cause){
  javaemul_internal_InternalPreconditions_checkCriticalState__ZLjava_lang_Object_2V(!this$static.java_lang_Throwable_cause);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(true, 'Self-causation not permitted');
  this$static.java_lang_Throwable_cause = cause;
  return this$static;
}

function java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this$static, backingJsObject){
  this$static.java_lang_Throwable_backingJsObject = backingJsObject;
  backingJsObject != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(backingJsObject, $intern_16, this$static);
}

function java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(this$static, message){
  var className;
  className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this$static.java_lang_Object__1_1_1clazz);
  return message == null?className:className + ': ' + message;
}

function java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  this.java_lang_Throwable_cause = cause;
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(4, 1, $intern_17);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_Throwable_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage__Ljava_lang_String_2 = function java_lang_Throwable_getMessage__Ljava_lang_String_2(){
  return this.java_lang_Throwable_detailMessage;
}
;
_.private$java_lang_Throwable$initializeBackingError__V = function java_lang_Throwable_initializeBackingError__V(){
  var className, errorMessage, message;
  message = this.java_lang_Throwable_detailMessage == null?null:this.java_lang_Throwable_detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(this.java_lang_Object__1_1_1clazz) , message == null?className:className + ': ' + message);
  java_lang_Throwable_$setBackingJsObject__Ljava_lang_Throwable_2Ljava_lang_Object_2V(this, java_lang_Throwable_fixIE__Ljava_lang_Object_2Ljava_lang_Object_2(this.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2(errorMessage)));
  com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Throwable_toString__Ljava_lang_String_2(){
  return java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(this, this.getMessage__Ljava_lang_String_2());
}
;
_.java_lang_Throwable_backingJsObject = $intern_15;
_.java_lang_Throwable_disableSuppression = false;
_.java_lang_Throwable_writetableStackTrace = true;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Throwable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Throwable', 4);
function java_lang_Exception_Exception__Ljava_lang_String_2V(message){
  this.java_lang_Throwable_detailMessage = message;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(27, 4, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Exception_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Exception', 27);
function java_lang_RuntimeException_RuntimeException__V(){
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

function java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(8, 27, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1RuntimeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'RuntimeException', 8);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(54, 8, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1JsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'JsException', 54);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(96, 54, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1JavaScriptExceptionBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'JavaScriptExceptionBase', 96);
function com_google_gwt_core_client_JavaScriptException_$clinit__V(){
  com_google_gwt_core_client_JavaScriptException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_JavaScriptException_NOT_1SET = new java_lang_Object_Object__V;
}

function com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this$static){
  var exception;
  if (this$static.com_google_gwt_core_client_JavaScriptException_message == null) {
    exception = com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this$static.com_google_gwt_core_client_JavaScriptException_e;
    this$static.com_google_gwt_core_client_JavaScriptException_name = exception == null?$intern_19:com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(exception)?'String':java_lang_Class_$getName__Ljava_lang_Class_2Ljava_lang_String_2(java_lang_Object_getClass_1_1Ljava_1lang_1Class_1_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Class_2(exception));
    this$static.com_google_gwt_core_client_JavaScriptException_description = this$static.com_google_gwt_core_client_JavaScriptException_description + ': ' + (com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(exception)?com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(com_google_gwt_lang_Cast_castToJso__Ljava_lang_Object_2Ljava_lang_Object_2(exception)):exception + '');
    this$static.com_google_gwt_core_client_JavaScriptException_message = '(' + this$static.com_google_gwt_core_client_JavaScriptException_name + ') ' + this$static.com_google_gwt_core_client_JavaScriptException_description;
  }
}

function com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_JavaScriptException_$clinit__V();
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.java_lang_Throwable_backingJsObject = e;
  e != null && javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(e, $intern_16, this);
  this.java_lang_Throwable_detailMessage = e == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(e);
  this.com_google_gwt_core_client_JavaScriptException_description = '';
  this.com_google_gwt_core_client_JavaScriptException_e = e;
  this.com_google_gwt_core_client_JavaScriptException_description = '';
}

function com_google_gwt_core_client_JavaScriptException_getExceptionDescription0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.message;
}

function com_google_gwt_core_client_JavaScriptException_getExceptionName0__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(e){
  return e == null?null:e.name;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(16, 96, {16:1, 3:1, 4:1}, com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V);
_.getMessage__Ljava_lang_String_2 = function com_google_gwt_core_client_JavaScriptException_getMessage__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JavaScriptException_$ensureInit__Lcom_google_gwt_core_client_JavaScriptException_2V(this) , this.com_google_gwt_core_client_JavaScriptException_message;
}
;
_.getThrown__Ljava_lang_Object_2 = function com_google_gwt_core_client_JavaScriptException_getThrown__Ljava_lang_Object_2(){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_core_client_JavaScriptException_e) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_core_client_JavaScriptException_NOT_1SET)?null:this.com_google_gwt_core_client_JavaScriptException_e;
}
;
var com_google_gwt_core_client_JavaScriptException_NOT_1SET;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'JavaScriptException', 16);
function com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this$static, other){
  return !!this$static && !!this$static.equals?this$static.equals(other):com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(other);
}

function com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this$static){
  return !!this$static && !!this$static.hashCode?this$static.hashCode():javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this$static);
}

var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1JavaScriptObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'JavaScriptObject$', 0);
function com_google_gwt_core_client_JsDate_now__D(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(c, escapeTable){
  var lookedUp = com_google_gwt_core_client_JsonUtils_escapeTable[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return s;
}

function com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(toEscape){
  var escapeTable = com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return com_google_gwt_core_client_JsonUtils_escapeChar__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function com_google_gwt_core_client_JsonUtils_getEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  !com_google_gwt_core_client_JsonUtils_escapeTable && (com_google_gwt_core_client_JsonUtils_escapeTable = com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2());
  return com_google_gwt_core_client_JsonUtils_escapeTable;
}

function com_google_gwt_core_client_JsonUtils_initEscapeTable__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var com_google_gwt_core_client_JsonUtils_escapeTable;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(186, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1Scheduler_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_13, 'Scheduler', 186);
function com_google_gwt_core_client_impl_Impl_$clinit__V(){
  com_google_gwt_core_client_impl_Impl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  !!(com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , com_google_gwt_core_client_impl_StackTraceCreator_collector);
}

function com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var _;
}

function com_google_gwt_core_client_impl_Impl_enter__Z(){
  var now_0;
  if (com_google_gwt_core_client_impl_Impl_entryDepth != 0) {
    now_0 = com_google_gwt_core_client_JsDate_now__D();
    if (now_0 - com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled > 2000) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = now_0;
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = $wnd.setTimeout(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V, 10);
    }
  }
  if (com_google_gwt_core_client_impl_Impl_entryDepth++ == 0) {
    com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
    return true;
  }
  return false;
}

function com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(jsFunction){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  return function(){
    return com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, this, arguments);
    var _;
  }
  ;
}

function com_google_gwt_core_client_impl_Impl_entry0__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = com_google_gwt_core_client_impl_Impl_enter__Z();
  try {
    return com_google_gwt_core_client_impl_Impl_apply__Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(jsFunction, thisObj, args);
  }
   finally {
    com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry);
  }
}

function com_google_gwt_core_client_impl_Impl_exit__ZV(initialEntry){
  initialEntry && com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE));
  --com_google_gwt_core_client_impl_Impl_entryDepth;
  if (initialEntry) {
    if (com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId != -1) {
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId);
      com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
    }
  }
}

function com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2(){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  var s = $doc.location.href;
  var i = s.indexOf('#');
  i != -1 && (s = s.substring(0, i));
  i = s.indexOf('?');
  i != -1 && (s = s.substring(0, i));
  i = s.lastIndexOf('/');
  i != -1 && (s = s.substring(0, i));
  return s.length > 0?s + '/':'';
}

function com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(e){
  com_google_gwt_core_client_impl_Impl_$clinit__V();
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthCancel__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_core_client_impl_Impl_watchdogEntryDepthRun__V(){
  com_google_gwt_core_client_impl_Impl_entryDepth != 0 && (com_google_gwt_core_client_impl_Impl_entryDepth = 0);
  com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
}

var com_google_gwt_core_client_impl_Impl_entryDepth = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthLastScheduled = 0, com_google_gwt_core_client_impl_Impl_watchdogEntryDepthTimerId = -1;
function com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V(){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE = new com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushEntryCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_entryCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushFinallyCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldQueue, rescheduled;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands;
      this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = null;
      rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldQueue, rescheduled);
    }
     while (this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands);
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_finallyCommands = rescheduled;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  var oldDeferred;
  if (this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands) {
    oldDeferred = this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands;
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = null;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = []);
    com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(oldDeferred, this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands);
  }
  !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands = com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands));
}

function com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this$static){
  return !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands || !!this$static.com_google_gwt_core_client_impl_SchedulerImpl_incrementalCommands;
}

function com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static){
  if (!this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning) {
    this$static.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = true;
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher = new com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
    !this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue && (this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue = new com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static));
    com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this$static.com_google_gwt_core_client_impl_SchedulerImpl_rescue, 50);
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$runRepeatingTasks__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new com_google_gwt_core_client_Duration_Duration__V;
  while (com_google_gwt_core_client_JsDate_now__D() - duration.com_google_gwt_core_client_Duration_start < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute__Z()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V(this$static, cmd){
  this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(this$static.com_google_gwt_core_client_impl_SchedulerImpl_deferredCommands, [cmd, false]);
  com_google_gwt_core_client_impl_SchedulerImpl_$maybeSchedulePostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$static);
}

function com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V(){
}

function com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z(cmd){
  return cmd.execute__Z();
}

function com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function com_google_gwt_core_client_impl_SchedulerImpl_runScheduledTasks__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_JsArray_2(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute__Z() && (rescheduled = com_google_gwt_core_client_impl_SchedulerImpl_push__Lcom_google_gwt_core_client_JsArray_2Lcom_google_gwt_core_client_impl_SchedulerImpl$Task_2Lcom_google_gwt_core_client_JsArray_2(rescheduled, t)):com_google_gwt_user_client_ui_Image$State$1_$execute__Lcom_google_gwt_user_client_ui_Image$State$1_2V(t[0]);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        com_google_gwt_core_client_impl_Impl_$clinit__V();
        com_google_gwt_core_client_impl_Impl_reportToBrowser__Ljava_lang_Object_2V(com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 16)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(e, 16).getThrown__Ljava_lang_Object_2():e);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  return rescheduled;
}

function com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(cmd, delayMs){
  com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V();
  function callback(){
    var ret = $entry(com_google_gwt_core_client_impl_SchedulerImpl_execute__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2Z)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(119, 186, {}, com_google_gwt_core_client_impl_SchedulerImpl_SchedulerImpl__V);
_.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
_.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = false;
var com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'SchedulerImpl', 119);
function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(120, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Flusher_SchedulerImpl$Flusher__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Flusher_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = true;
  com_google_gwt_core_client_impl_SchedulerImpl_$flushPostEventPumpCommands__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
  this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning = false;
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning = com_google_gwt_core_client_impl_SchedulerImpl_$isWorkQueued__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Z(this.com_google_gwt_core_client_impl_SchedulerImpl$Flusher_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Flusher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'SchedulerImpl/Flusher', 120);
function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V(this$0){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(121, 1, {}, com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_SchedulerImpl$Rescuer__Lcom_google_gwt_core_client_impl_SchedulerImpl_2V);
_.execute__Z = function com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_execute__Z(){
  this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flushRunning && com_google_gwt_core_client_impl_SchedulerImpl_scheduleFixedDelayImpl__Lcom_google_gwt_core_client_Scheduler$RepeatingCommand_2IV(this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_flusher, 1);
  return this.com_google_gwt_core_client_impl_SchedulerImpl$Rescuer_this$01.com_google_gwt_core_client_impl_SchedulerImpl_shouldBeRunning;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1SchedulerImpl$Rescuer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'SchedulerImpl/Rescuer', 121);
function com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V(){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  var c, enforceLegacy;
  enforceLegacy = !com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z();
  c = new com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V;
  com_google_gwt_core_client_impl_StackTraceCreator_collector = enforceLegacy?new com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V:c;
}

function com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(error){
  com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V();
  com_google_gwt_core_client_impl_StackTraceCreator_collector.collect__Ljava_lang_Object_2V(error);
}

function com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function com_google_gwt_core_client_impl_StackTraceCreator_supportsErrorStack__Z(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var com_google_gwt_core_client_impl_StackTraceCreator_collector;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(199, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$Collector_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/Collector', 199);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(97, 199, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_StackTraceCreator$CollectorLegacy__V);
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_collect__Ljava_lang_Object_2V(error){
  var seen = {}, com_google_gwt_core_client_impl_StackTraceCreator_getFunctionName__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_String_2_name_0;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = (com_google_gwt_core_client_impl_StackTraceCreator_$clinit__V() , callee.name || (callee.name = com_google_gwt_core_client_impl_StackTraceCreator_extractFunctionName__Ljava_lang_String_2Ljava_lang_String_2(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorLegacy_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/CollectorLegacy', 97);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(200, 199, {});
_.collect__Ljava_lang_Object_2V = function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_collect__Ljava_lang_Object_2V(error){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModern_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/CollectorModern', 200);
function com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(98, 200, {}, com_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_StackTraceCreator$CollectorModernNoSourceMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1core_1client_1impl_1StackTraceCreator$CollectorModernNoSourceMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_18, 'StackTraceCreator/CollectorModernNoSourceMap', 98);
function com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, newChild){
  return this$static.appendChild(newChild);
}

function com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function com_google_gwt_dom_client_DOMImplStandard_$dispatchEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_NativeEvent_2V(target, evt){
  target.dispatchEvent(evt);
}

function com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, text_0){
  elem.textContent = text_0 || '';
}

function com_google_gwt_dom_client_DOMImplMozilla_$eventGetRelatedTarget__Lcom_google_gwt_dom_client_DOMImplMozilla_2Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_dom_client_EventTarget_2(evt){
  var relatedTarget = evt.relatedTarget;
  if (!relatedTarget) {
    return null;
  }
  try {
    var nodeName = relatedTarget.nodeName;
    return relatedTarget;
  }
   catch (e) {
    return null;
  }
}

function com_google_gwt_dom_client_DOMImplMozilla_$isOrHasChild__Lcom_google_gwt_dom_client_DOMImplMozilla_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Z(parent_0, child){
  return parent_0 === child || !!(parent_0.compareDocumentPosition(child) & 16);
}

function com_google_gwt_dom_client_DOMImplMozilla_$toString__Lcom_google_gwt_dom_client_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2(elem){
  var doc = elem.ownerDocument;
  var temp = elem.cloneNode(true);
  var tempDiv = doc.createElement('DIV');
  tempDiv.appendChild(temp);
  outer = tempDiv.innerHTML;
  temp.innerHTML = '';
  return outer;
}

function com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2(this$static){
  !this$static.gwt_uid && (this$static.gwt_uid = 1);
  return 'gwt-uid-' + this$static.gwt_uid++;
}

function com_google_gwt_dom_client_ImageElement_$setSrc__Lcom_google_gwt_dom_client_ImageElement_2Ljava_lang_String_2V(this$static, src_0){
  this$static.src = src_0;
}

function com_google_gwt_dom_client_InputElement_$setChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static, checked){
  this$static.checked = checked;
}

function com_google_gwt_dom_client_InputElement_$setDefaultChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static, defaultChecked){
  this$static.defaultChecked = defaultChecked;
}

function com_google_gwt_dom_client_LabelElement_$setHtmlFor__Lcom_google_gwt_dom_client_LabelElement_2Ljava_lang_String_2V(this$static, htmlFor){
  this$static.htmlFor = htmlFor;
}

function java_lang_Enum_Enum__Ljava_lang_String_2IV(name_0, ordinal){
  this.java_lang_Enum_name = name_0;
  this.java_lang_Enum_ordinal = ordinal;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(52, 1, $intern_20);
_.equals__Ljava_lang_Object_2Z = function java_lang_Enum_equals__Ljava_lang_Object_2Z(other){
  return this === other;
}
;
_.hashCode__I = function java_lang_Enum_hashCode__I(){
  return javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(this);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Enum_toString__Ljava_lang_String_2(){
  return this.java_lang_Enum_name != null?this.java_lang_Enum_name:'' + this.java_lang_Enum_ordinal;
}
;
_.java_lang_Enum_ordinal = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Enum_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Enum', 52);
function com_google_gwt_dom_client_Style$TextAlign_$clinit__V(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_dom_client_Style$TextAlign_CENTER = new com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_JUSTIFY = new com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_LEFT = new com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV;
  com_google_gwt_dom_client_Style$TextAlign_RIGHT = new com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV;
}

function com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2(){
  com_google_gwt_dom_client_Style$TextAlign_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit, 1), $intern_14, 33, 0, [com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(33, 52, $intern_20);
var com_google_gwt_dom_client_Style$TextAlign_CENTER, com_google_gwt_dom_client_Style$TextAlign_JUSTIFY, com_google_gwt_dom_client_Style$TextAlign_LEFT, com_google_gwt_dom_client_Style$TextAlign_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_21, 'Style/TextAlign', 33, com_google_gwt_dom_client_Style$TextAlign_values___3Lcom_google_gwt_dom_client_Style$TextAlign_2);
function com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(153, 33, $intern_20, com_google_gwt_dom_client_Style$TextAlign$1_Style$TextAlign$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_21, 'Style/TextAlign/1', 153, null);
function com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(154, 33, $intern_20, com_google_gwt_dom_client_Style$TextAlign$2_Style$TextAlign$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_21, 'Style/TextAlign/2', 154, null);
function com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(155, 33, $intern_20, com_google_gwt_dom_client_Style$TextAlign$3_Style$TextAlign$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_21, 'Style/TextAlign/3', 155, null);
function com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV(){
  com_google_gwt_dom_client_Style$TextAlign_Style$TextAlign__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(156, 33, $intern_20, com_google_gwt_dom_client_Style$TextAlign$4_Style$TextAlign$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1dom_1client_1Style$TextAlign$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_21, 'Style/TextAlign/4', 156, null);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(209, 1, {});
_.toString__Ljava_lang_String_2 = function com_google_web_bindery_event_shared_Event_toString__Ljava_lang_String_2(){
  return 'An event type';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'Event', 209);
function com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(this$static, source){
  this$static.com_google_web_bindery_event_shared_Event_source = source;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(210, 209, {});
_.com_google_gwt_event_shared_GwtEvent_dead = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'GwtEvent', 210);
function com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(this$static, nativeEvent){
  this$static.com_google_gwt_event_dom_client_DomEvent_nativeEvent = nativeEvent;
}

function com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(this$static, relativeElem){
  this$static.com_google_gwt_event_dom_client_DomEvent_relativeElem = relativeElem;
}

function com_google_gwt_event_dom_client_DomEvent_fireNativeEvent__Lcom_google_gwt_dom_client_NativeEvent_2Lcom_google_gwt_event_shared_HasHandlers_2Lcom_google_gwt_dom_client_Element_2V(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (com_google_gwt_event_dom_client_DomEvent_registered) {
    types = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered, nativeEvent.type), 26);
    if (types) {
      for (type$iterator = types.iterator__Ljava_util_Iterator_2(); type$iterator.hasNext__Z();) {
        type_0 = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(type$iterator.next__Ljava_lang_Object_2(), 62);
        currentNative = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_nativeEvent;
        currentRelativeElem = type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight.com_google_gwt_event_dom_client_DomEvent_relativeElem;
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, nativeEvent);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, relativeElem);
        com_google_gwt_user_client_ui_Widget_$fireEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_event_shared_GwtEvent_2V(handlerSource, type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight);
        com_google_gwt_event_dom_client_DomEvent_$setNativeEvent__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_NativeEvent_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentNative);
        com_google_gwt_event_dom_client_DomEvent_$setRelativeElement__Lcom_google_gwt_event_dom_client_DomEvent_2Lcom_google_gwt_dom_client_Element_2V(type_0.com_google_gwt_event_dom_client_DomEvent$Type_flyweight, currentRelativeElem);
      }
    }
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(214, 210, {});
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_dom_client_DomEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return this.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2();
}
;
var com_google_gwt_event_dom_client_DomEvent_registered;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_24, 'DomEvent', 214);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(215, 214, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1HumanInputEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_24, 'HumanInputEvent', 215);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(216, 215, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1MouseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_24, 'MouseEvent', 216);
function com_google_gwt_event_dom_client_ClickEvent_$clinit__V(){
  com_google_gwt_event_dom_client_ClickEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_event_dom_client_ClickEvent_TYPE = new com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(new com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
}

function com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(159, 216, {}, com_google_gwt_event_dom_client_ClickEvent_ClickEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_dom_client_ClickEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 185).onClick__Lcom_google_gwt_event_dom_client_ClickEvent_2V(this);
}
;
_.getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2 = function com_google_gwt_event_dom_client_ClickEvent_getAssociatedType__Lcom_google_gwt_event_dom_client_DomEvent$Type_2(){
  return com_google_gwt_event_dom_client_ClickEvent_TYPE;
}
;
var com_google_gwt_event_dom_client_ClickEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1ClickEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_24, 'ClickEvent', 159);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(130, 1, {});
_.hashCode__I = function com_google_web_bindery_event_shared_Event$Type_hashCode__I(){
  return this.com_google_web_bindery_event_shared_Event$Type_index;
}
;
_.toString__Ljava_lang_String_2 = function com_google_web_bindery_event_shared_Event$Type_toString__Ljava_lang_String_2(){
  return 'Event type';
}
;
_.com_google_web_bindery_event_shared_Event$Type_index = 0;
var com_google_web_bindery_event_shared_Event$Type_nextHashCode = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1Event$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'Event/Type', 130);
function com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V(){
  this.com_google_web_bindery_event_shared_Event$Type_index = ++com_google_web_bindery_event_shared_Event$Type_nextHashCode;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(61, 130, {}, com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1GwtEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'GwtEvent/Type', 61);
function com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V(flyweight){
  var types;
  com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V.call(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_flyweight = flyweight;
  !com_google_gwt_event_dom_client_DomEvent_registered && (com_google_gwt_event_dom_client_DomEvent_registered = new com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
  types = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_event_dom_client_DomEvent_registered.com_google_gwt_event_dom_client_PrivateMap_map[$intern_25], 26);
  if (!types) {
    types = new java_util_ArrayList_ArrayList__V;
    com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(com_google_gwt_event_dom_client_DomEvent_registered, types);
  }
  types.add__Ljava_lang_Object_2Z(this);
  this.com_google_gwt_event_dom_client_DomEvent$Type_name = $intern_25;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(62, 61, {62:1}, com_google_gwt_event_dom_client_DomEvent$Type_DomEvent$Type__Ljava_lang_String_2Lcom_google_gwt_event_dom_client_DomEvent_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1DomEvent$Type_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_24, 'DomEvent/Type', 62);
function com_google_gwt_event_dom_client_PrivateMap_$unsafeGet__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.com_google_gwt_event_dom_client_PrivateMap_map[key];
}

function com_google_gwt_event_dom_client_PrivateMap_$unsafePut__Lcom_google_gwt_event_dom_client_PrivateMap_2Ljava_lang_String_2Ljava_lang_Object_2V(this$static, value_0){
  this$static.com_google_gwt_event_dom_client_PrivateMap_map[$intern_25] = value_0;
}

function com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V(){
  this.com_google_gwt_event_dom_client_PrivateMap_map = {};
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(163, 1, {}, com_google_gwt_event_dom_client_PrivateMap_PrivateMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1dom_1client_1PrivateMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_24, 'PrivateMap', 163);
function com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV(){
}

function com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV(source){
  var event_0;
  if (com_google_gwt_event_logical_shared_CloseEvent_TYPE) {
    event_0 = new com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV;
    com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(source, event_0);
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(142, 210, {}, com_google_gwt_event_logical_shared_CloseEvent_CloseEvent__Ljava_lang_Object_2ZV);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_event_logical_shared_CloseEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 220);
  com_google_gwt_user_client_ui_RootPanel_detachWidgets__V();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_event_logical_shared_CloseEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_event_logical_shared_CloseEvent_TYPE;
}
;
var com_google_gwt_event_logical_shared_CloseEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1logical_1shared_1CloseEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.event.logical.shared', 'CloseEvent', 142);
function com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  return com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, type_0, handler) , new com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V;
}

function com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(this$static, event_0){
  var e, oldSource;
  !event_0.com_google_gwt_event_shared_GwtEvent_dead || (event_0.com_google_gwt_event_shared_GwtEvent_dead = false , event_0.com_google_web_bindery_event_shared_Event_source = null);
  oldSource = event_0.com_google_web_bindery_event_shared_Event_source;
  com_google_gwt_event_shared_GwtEvent_$overrideSource__Lcom_google_gwt_event_shared_GwtEvent_2Ljava_lang_Object_2V(event_0, this$static.com_google_gwt_event_shared_HandlerManager_source);
  try {
    com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static.com_google_gwt_event_shared_HandlerManager_eventBus, event_0);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 29)) {
      e = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(e.com_google_web_bindery_event_shared_UmbrellaException_causes));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
   finally {
    oldSource == null?(event_0.com_google_gwt_event_shared_GwtEvent_dead = true , event_0.com_google_web_bindery_event_shared_Event_source = null):(event_0.com_google_web_bindery_event_shared_Event_source = oldSource);
  }
}

function com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V(source){
  this.com_google_gwt_event_shared_HandlerManager_eventBus = new com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV;
  this.com_google_gwt_event_shared_HandlerManager_source = source;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(60, 1, {}, com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'HandlerManager', 60);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(211, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1EventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'EventBus', 211);
function com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, command){
  !this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas && (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = new java_util_ArrayList_ArrayList__V);
  java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas, command);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAdd__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2Lcom_google_web_bindery_event_shared_HandlerRegistration_2(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot add a handler with a null type'));
  }
  this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth > 0?com_google_web_bindery_event_shared_SimpleEventBus_$defer__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_SimpleEventBus$Command_2V(this$static, new com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static, type_0, handler)):(l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, null) , l.add__Ljava_lang_Object_2Z(handler));
  return new com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(this$static, type_0, source, handler){
  var l;
  l = com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source);
  l.add__Ljava_lang_Object_2Z(handler);
}

function com_google_web_bindery_event_shared_SimpleEventBus_$doFire__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event_2Ljava_lang_Object_2V(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot fire null event'));
  }
  try {
    ++this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    handlers = (directHandlers = com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, event_0.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2()) , directHandlers);
    causes = null;
    it = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?handlers.listIterator__ILjava_util_ListIterator_2(handlers.size__I()):handlers.listIterator__Ljava_util_ListIterator_2();
    while (this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.hasPrevious__Z():it.hasNext__Z()) {
      handler = this$static.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder?it.previous__Ljava_lang_Object_2():it.next__Ljava_lang_Object_2();
      try {
        event_0.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(handler, 89));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
          e = $e0;
          !causes && (causes = new java_util_HashSet_HashSet__V);
          java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(causes.java_util_HashSet_map, e, causes);
        }
         else 
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
    if (causes) {
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes));
    }
  }
   finally {
    --this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth;
    this$static.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth == 0 && com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static);
  }
}

function com_google_web_bindery_event_shared_SimpleEventBus_$ensureHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49);
  if (!sourceMap) {
    sourceMap = new java_util_HashMap_HashMap__V;
    java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0, sourceMap);
  }
  handlers = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source)), 26);
  if (!handlers) {
    handlers = new java_util_ArrayList_ArrayList__V;
    java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, source, handlers);
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$getHandlerList__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_util_List_2(this$static, type_0){
  var handlers, sourceMap;
  sourceMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_web_bindery_event_shared_SimpleEventBus_map, type_0), 49);
  if (!sourceMap) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  handlers = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(sourceMap.java_util_AbstractHashMap_hashCodeMap, null)), 26);
  if (!handlers) {
    return java_util_Collections_$clinit__V() , java_util_Collections_$clinit__V() , java_util_Collections_EMPTY_1LIST;
  }
  return handlers;
}

function com_google_web_bindery_event_shared_SimpleEventBus_$handleQueuedAddsAndRemoves__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$static){
  var c, c$iterator;
  if (this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas) {
    try {
      for (c$iterator = new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas); c$iterator.java_util_ArrayList$1_i < c$iterator.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;) {
        c = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(c$iterator), 221);
        com_google_web_bindery_event_shared_SimpleEventBus_$doAddNow__Lcom_google_web_bindery_event_shared_SimpleEventBus_2Lcom_google_web_bindery_event_shared_Event$Type_2Ljava_lang_Object_2Ljava_lang_Object_2V(c.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01, c.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2, c.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3, c.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4);
      }
    }
     finally {
      this$static.com_google_web_bindery_event_shared_SimpleEventBus_deferredDeltas = null;
    }
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(131, 211, {});
_.com_google_web_bindery_event_shared_SimpleEventBus_firingDepth = 0;
_.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'SimpleEventBus', 131);
function com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV(){
  this.com_google_web_bindery_event_shared_SimpleEventBus_map = new java_util_HashMap_HashMap__V;
  this.com_google_web_bindery_event_shared_SimpleEventBus_isReverseOrder = false;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(132, 131, {}, com_google_gwt_event_shared_HandlerManager$Bus_HandlerManager$Bus__ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1HandlerManager$Bus_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'HandlerManager/Bus', 132);
function com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(157, 1, {}, com_google_gwt_event_shared_LegacyHandlerWrapper_LegacyHandlerWrapper__Lcom_google_web_bindery_event_shared_HandlerRegistration_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1LegacyHandlerWrapper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, 'LegacyHandlerWrapper', 157);
function com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  var cause, cause$iterator, i;
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes), causes.isEmpty__Z()?null:com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(causes.iterator__Ljava_util_Iterator_2().next__Ljava_lang_Object_2(), 4));
  this.com_google_web_bindery_event_shared_UmbrellaException_causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator__Ljava_util_Iterator_2(); cause$iterator.hasNext__Z();) {
    cause = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(cause$iterator.next__Ljava_lang_Object_2(), 4);
    if (i++ == 0) {
      continue;
    }
    java_lang_Throwable_$addSuppressed__Ljava_lang_Throwable_2Ljava_lang_Throwable_2V(this, cause);
  }
}

function com_google_web_bindery_event_shared_UmbrellaException_makeMessage__Ljava_util_Set_2Ljava_lang_String_2(causes){
  var b, count, first, t, t$iterator;
  count = causes.size__I();
  if (count == 0) {
    return null;
  }
  b = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator__Ljava_util_Iterator_2(); t$iterator.hasNext__Z();) {
    t = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(t$iterator.next__Ljava_lang_Object_2(), 4);
    first?(first = false):(b.java_lang_AbstractStringBuilder_string += '; ' , b);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(b, t.getMessage__Ljava_lang_String_2());
  }
  return b.java_lang_AbstractStringBuilder_string;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(29, 8, $intern_26, com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, $intern_27, 29);
function com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V(causes){
  com_google_web_bindery_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(70, 29, $intern_26, com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1event_1shared_1UmbrellaException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_23, $intern_27, 70);
function com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static){
  var xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  xhr.abort();
}

function com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  var response, xhr;
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static.com_google_gwt_http_client_Request_timer);
  xhr = this$static.com_google_gwt_http_client_Request_xmlHttpRequest;
  this$static.com_google_gwt_http_client_Request_xmlHttpRequest = null;
  response = new com_google_gwt_http_client_ResponseImpl_ResponseImpl__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
  org_fusesource_restygwt_client_AbstractRequestCallback_$onResponseReceived__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_Response_2V(callback, response);
}

function com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this$static){
  if (!this$static.com_google_gwt_http_client_Request_xmlHttpRequest) {
    return;
  }
  com_google_gwt_http_client_Request_$cancel__Lcom_google_gwt_http_client_Request_2V(this$static);
  org_fusesource_restygwt_client_AbstractRequestCallback_$onError__Lorg_fusesource_restygwt_client_AbstractRequestCallback_2Lcom_google_gwt_http_client_Request_2Ljava_lang_Throwable_2V(this$static.com_google_gwt_http_client_Request_callback, new com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(this$static.com_google_gwt_http_client_Request_timeoutMillis));
}

function com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, timeoutMillis, callback){
  this.com_google_gwt_http_client_Request_timer = new com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this);
  if (!xmlHttpRequest) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (!callback) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (timeoutMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__V);
  }
  this.com_google_gwt_http_client_Request_callback = callback;
  this.com_google_gwt_http_client_Request_timeoutMillis = timeoutMillis;
  this.com_google_gwt_http_client_Request_xmlHttpRequest = xmlHttpRequest;
  timeoutMillis > 0 && com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this.com_google_gwt_http_client_Request_timer, timeoutMillis);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(149, 1, {}, com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V);
_.com_google_gwt_http_client_Request_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Request', 149);
function com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static){
  if (!this$static.com_google_gwt_user_client_Timer_timerId) {
    return;
  }
  ++this$static.com_google_gwt_user_client_Timer_cancelCounter;
  this$static.com_google_gwt_user_client_Timer_isRepeating?com_google_gwt_user_client_Timer_clearInterval__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value):com_google_gwt_user_client_Timer_clearTimeout__IV(this$static.com_google_gwt_user_client_Timer_timerId.java_lang_Integer_value);
  this$static.com_google_gwt_user_client_Timer_timerId = null;
}

function com_google_gwt_user_client_Timer_$schedule__Lcom_google_gwt_user_client_Timer_2IV(this$static, delayMillis){
  if (delayMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('must be non-negative'));
  }
  !!this$static.com_google_gwt_user_client_Timer_timerId && com_google_gwt_user_client_Timer_$cancel__Lcom_google_gwt_user_client_Timer_2V(this$static);
  this$static.com_google_gwt_user_client_Timer_isRepeating = false;
  this$static.com_google_gwt_user_client_Timer_timerId = java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(this$static, this$static.com_google_gwt_user_client_Timer_cancelCounter), delayMillis));
}

function com_google_gwt_user_client_Timer_clearInterval__IV(timerId){
  $wnd.clearInterval(timerId);
}

function com_google_gwt_user_client_Timer_clearTimeout__IV(timerId){
  $wnd.clearTimeout(timerId);
}

function com_google_gwt_user_client_Timer_createCallback__Lcom_google_gwt_user_client_Timer_2ILcom_google_gwt_core_client_JavaScriptObject_2(timer, cancelCounter){
  return $entry(function(){
    timer.package_private$com_google_gwt_user_client$fire__IV(cancelCounter);
  }
  );
}

function com_google_gwt_user_client_Timer_setTimeout__Lcom_google_gwt_core_client_JavaScriptObject_2II(func, time){
  return $wnd.setTimeout(func, time);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(151, 1, {});
_.package_private$com_google_gwt_user_client$fire__IV = function com_google_gwt_user_client_Timer_fire__IV(scheduleCancelCounter){
  if (scheduleCancelCounter != this.com_google_gwt_user_client_Timer_cancelCounter) {
    return;
  }
  this.com_google_gwt_user_client_Timer_isRepeating || (this.com_google_gwt_user_client_Timer_timerId = null);
  com_google_gwt_http_client_Request_$fireOnTimeout__Lcom_google_gwt_http_client_Request_2V(this.com_google_gwt_http_client_Request$1_this$01);
}
;
_.com_google_gwt_user_client_Timer_cancelCounter = 0;
_.com_google_gwt_user_client_Timer_isRepeating = false;
_.com_google_gwt_user_client_Timer_timerId = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Timer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Timer', 151);
function com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V(this$0){
  this.com_google_gwt_http_client_Request$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(152, 151, {}, com_google_gwt_http_client_Request$1_Request$1__Lcom_google_gwt_http_client_Request_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Request$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Request/1', 152);
function com_google_gwt_http_client_RequestBuilder_$clinit__V(){
  com_google_gwt_http_client_RequestBuilder_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('DELETE');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('GET');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('HEAD');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('POST');
  new com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V('PUT');
}

function com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(this$static, requestData, callback){
  var e, request, requestPermissionException, xmlHttpRequest;
  xmlHttpRequest = new $wnd.XMLHttpRequest;
  try {
    com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_httpMethod, this$static.com_google_gwt_http_client_RequestBuilder_url);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 16)) {
      e = $e0;
      requestPermissionException = new com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(this$static.com_google_gwt_http_client_RequestBuilder_url);
      java_lang_Throwable_$initCause__Ljava_lang_Throwable_2Ljava_lang_Throwable_2Ljava_lang_Throwable_2(requestPermissionException, new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(requestPermissionException);
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
  com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest);
  this$static.com_google_gwt_http_client_RequestBuilder_includeCredentials && (xmlHttpRequest.withCredentials = true , undefined);
  request = new com_google_gwt_http_client_Request_Request__Lcom_google_gwt_xhr_client_XMLHttpRequest_2ILcom_google_gwt_http_client_RequestCallback_2V(xmlHttpRequest, this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis, callback);
  com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(xmlHttpRequest, new com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(request, callback));
  try {
    xmlHttpRequest.send(requestData);
  }
   catch ($e1) {
    $e1 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e1, 16)) {
      e = $e1;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e1);
  }
  return request;
}

function com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static, callback){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', callback);
  this$static.com_google_gwt_http_client_RequestBuilder_callback = callback;
}

function com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('header', header);
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('value', value_0);
  !this$static.com_google_gwt_http_client_RequestBuilder_headers && (this$static.com_google_gwt_http_client_RequestBuilder_headers = new java_util_HashMap_HashMap__V);
  java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_http_client_RequestBuilder_headers, header, value_0);
}

function com_google_gwt_http_client_RequestBuilder_$setHeaders__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static, xmlHttpRequest){
  var e, header, header$iterator;
  if (!!this$static.com_google_gwt_http_client_RequestBuilder_headers && java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static.com_google_gwt_http_client_RequestBuilder_headers) > 0) {
    for (header$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$static.com_google_gwt_http_client_RequestBuilder_headers)).java_util_AbstractHashMap$EntrySet_this$01); header$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
      header = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(header$iterator);
      try {
        com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(xmlHttpRequest, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(header.getValue__Ljava_lang_Object_2()));
      }
       catch ($e0) {
        $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
        if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 16)) {
          e = $e0;
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(e.getMessage__Ljava_lang_String_2()));
        }
         else 
          throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      }
    }
  }
   else {
    xmlHttpRequest.setRequestHeader('Content-Type', 'text/plain; charset=utf-8');
  }
}

function com_google_gwt_http_client_RequestBuilder_$setTimeoutMillis__Lcom_google_gwt_http_client_RequestBuilder_2IV(this$static, timeoutMillis){
  if (timeoutMillis < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('Timeouts cannot be negative'));
  }
  this$static.com_google_gwt_http_client_RequestBuilder_timeoutMillis = timeoutMillis;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(144, 1, {});
_.com_google_gwt_http_client_RequestBuilder_includeCredentials = false;
_.com_google_gwt_http_client_RequestBuilder_timeoutMillis = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'RequestBuilder', 144);
function com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V(val$request, val$callback){
  this.com_google_gwt_http_client_RequestBuilder$1_val$request2 = val$request;
  this.com_google_gwt_http_client_RequestBuilder$1_val$callback3 = val$callback;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(146, 1, {}, com_google_gwt_http_client_RequestBuilder$1_RequestBuilder$1__Lcom_google_gwt_http_client_RequestBuilder_2V);
_.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V = function com_google_gwt_http_client_RequestBuilder$1_onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr){
  if (xhr.readyState == 4) {
    com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xhr);
    com_google_gwt_http_client_Request_$fireOnResponseReceived__Lcom_google_gwt_http_client_Request_2Lcom_google_gwt_http_client_RequestCallback_2V(this.com_google_gwt_http_client_RequestBuilder$1_val$request2, this.com_google_gwt_http_client_RequestBuilder$1_val$callback3);
  }
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'RequestBuilder/1', 146);
function com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V(name_0){
  this.com_google_gwt_http_client_RequestBuilder$Method_name = name_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(32, 1, {}, com_google_gwt_http_client_RequestBuilder$Method_RequestBuilder$Method__Ljava_lang_String_2V);
_.toString__Ljava_lang_String_2 = function com_google_gwt_http_client_RequestBuilder$Method_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_http_client_RequestBuilder$Method_name;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestBuilder$Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'RequestBuilder/Method', 32);
function com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V(message){
  java_lang_Exception_Exception__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(14, 27, $intern_30, com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'RequestException', 14);
function com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'The URL ' + url_0 + ' is invalid or violates the same-origin security restriction');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(158, 14, $intern_30, com_google_gwt_http_client_RequestPermissionException_RequestPermissionException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestPermissionException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'RequestPermissionException', 158);
function com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV(timeoutMillis){
  com_google_gwt_http_client_RequestException_RequestException__Ljava_lang_String_2V.call(this, 'A request timeout has expired after ' + timeoutMillis + ' ms');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(166, 14, $intern_30, com_google_gwt_http_client_RequestTimeoutException_RequestTimeoutException__Lcom_google_gwt_http_client_Request_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1RequestTimeoutException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'RequestTimeoutException', 166);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(213, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1Response_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'Response', 213);
function com_google_gwt_http_client_ResponseImpl_ResponseImpl__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(xmlHttpRequest){
  this.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest = xmlHttpRequest;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(150, 213, {}, com_google_gwt_http_client_ResponseImpl_ResponseImpl__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1http_1client_1ResponseImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_28, 'ResponseImpl', 150);
function com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V(name_0, value_0){
  com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0);
  if (0 == java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(value_0).length) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(name_0 + ' cannot be empty'));
  }
}

function com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V(name_0, value_0){
  if (null == value_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(name_0 + ' cannot be null'));
  }
}

function com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem){
  var dirPropertyValue;
  dirPropertyValue = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2(elem, 'dir');
  if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('rtl', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_RTL;
  }
   else if (java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z('ltr', dirPropertyValue)) {
    return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_LTR;
  }
  return com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT;
}

function com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(elem, direction){
  switch (direction.java_lang_Enum_ordinal) {
    case 0:
      {
        elem['dir'] = 'rtl';
        break;
      }

    case 1:
      {
        elem['dir'] = 'ltr';
        break;
      }

    case 2:
      {
        com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(elem) != (com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V() , com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT) && (elem['dir'] = '' , undefined);
        break;
      }

  }
}

function com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_i18n_client_HasDirection$Direction_RTL = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('RTL', 0);
  com_google_gwt_i18n_client_HasDirection$Direction_LTR = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('LTR', 1);
  com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT = new com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV('DEFAULT', 2);
}

function com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2(){
  com_google_gwt_i18n_client_HasDirection$Direction_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit, 1), $intern_14, 39, 0, [com_google_gwt_i18n_client_HasDirection$Direction_RTL, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(39, 52, $intern_20, com_google_gwt_i18n_client_HasDirection$Direction_HasDirection$Direction__Ljava_lang_String_2IV);
var com_google_gwt_i18n_client_HasDirection$Direction_DEFAULT, com_google_gwt_i18n_client_HasDirection$Direction_LTR, com_google_gwt_i18n_client_HasDirection$Direction_RTL;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1i18n_1client_1HasDirection$Direction_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2('com.google.gwt.i18n.client', 'HasDirection/Direction', 39, com_google_gwt_i18n_client_HasDirection$Direction_values___3Lcom_google_gwt_i18n_client_HasDirection$Direction_2);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(218, 1, {});
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONValue_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return null;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONValue_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return null;
}
;
_.isNull__Lcom_google_gwt_json_client_JSONNull_2 = function com_google_gwt_json_client_JSONValue_isNull__Lcom_google_gwt_json_client_JSONNull_2(){
  return null;
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONValue_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return null;
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONValue_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return null;
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONValue_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return null;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONValue_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONValue', 218);
function com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this$static, index_0){
  var v = this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0];
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONArray_$set0__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2V(this$static, index_0, value_0){
  if (value_0) {
    var func = value_0.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2();
    value_0 = func(value_0);
  }
   else {
    value_0 = undefined;
  }
  this$static.com_google_gwt_json_client_JSONArray_jsArray[index_0] = value_0;
}

function com_google_gwt_json_client_JSONArray_JSONArray__V(){
  this.com_google_gwt_json_client_JSONArray_jsArray = [];
}

function com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(arr){
  this.com_google_gwt_json_client_JSONArray_jsArray = arr;
}

function com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONArray_jsArray;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(45, 218, {45:1}, com_google_gwt_json_client_JSONArray_JSONArray__V, com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONArray_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 45)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONArray_jsArray, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 45).com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONArray_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONArray_unwrap__Lcom_google_gwt_json_client_JSONArray_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONArray_hashCode__I(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this.com_google_gwt_json_client_JSONArray_jsArray);
}
;
_.isArray__Lcom_google_gwt_json_client_JSONArray_2 = function com_google_gwt_json_client_JSONArray_isArray__Lcom_google_gwt_json_client_JSONArray_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONArray_toString__Ljava_lang_String_2(){
  var c, i, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('[');
  for (i = 0 , c = this.com_google_gwt_json_client_JSONArray_jsArray.length; i < c; i++) {
    i > 0 && (sb.java_lang_AbstractStringBuilder_string += ',' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONArray_$get__Lcom_google_gwt_json_client_JSONArray_2ILcom_google_gwt_json_client_JSONValue_2(this, i));
  }
  sb.java_lang_AbstractStringBuilder_string += ']';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONArray_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONArray', 45);
function com_google_gwt_json_client_JSONBoolean_$clinit__V(){
  com_google_gwt_json_client_JSONBoolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONBoolean_FALSE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(false);
  com_google_gwt_json_client_JSONBoolean_TRUE = new com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(true);
}

function com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV(value_0){
  this.com_google_gwt_json_client_JSONBoolean_value = value_0;
}

function com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z(value_0){
  return value_0.com_google_gwt_json_client_JSONBoolean_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(87, 218, {}, com_google_gwt_json_client_JSONBoolean_JSONBoolean__ZV);
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONBoolean_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONBoolean_unwrap__Lcom_google_gwt_json_client_JSONBoolean_2Z;
}
;
_.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2 = function com_google_gwt_json_client_JSONBoolean_isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONBoolean_toString__Ljava_lang_String_2(){
  return java_lang_Boolean_$clinit__V() , '' + this.com_google_gwt_json_client_JSONBoolean_value;
}
;
_.com_google_gwt_json_client_JSONBoolean_value = false;
var com_google_gwt_json_client_JSONBoolean_FALSE, com_google_gwt_json_client_JSONBoolean_TRUE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONBoolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONBoolean', 87);
function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

function com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(cause){
  this.java_lang_Throwable_detailMessage = !cause?null:java_lang_Throwable_$toString__Ljava_lang_Throwable_2Ljava_lang_String_2Ljava_lang_String_2(cause, cause.getMessage__Ljava_lang_String_2());
  this.java_lang_Throwable_cause = cause;
  java_lang_Throwable_$fillInStackTrace__Ljava_lang_Throwable_2Ljava_lang_Throwable_2(this);
  this.private$java_lang_Throwable$initializeBackingError__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(67, 8, $intern_17, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V, com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONException', 67);
function com_google_gwt_json_client_JSONNull_$clinit__V(){
  com_google_gwt_json_client_JSONNull_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONNull_instance = new com_google_gwt_json_client_JSONNull_JSONNull__V;
}

function com_google_gwt_json_client_JSONNull_JSONNull__V(){
}

function com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(64, 218, {64:1}, com_google_gwt_json_client_JSONNull_JSONNull__V);
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNull_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNull_unwrap__Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.isNull__Lcom_google_gwt_json_client_JSONNull_2 = function com_google_gwt_json_client_JSONNull_isNull__Lcom_google_gwt_json_client_JSONNull_2(){
  if (this != com_google_gwt_json_client_JSONNull_instance) {
    return null;
  }
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONNull_toString__Ljava_lang_String_2(){
  return $intern_19;
}
;
var com_google_gwt_json_client_JSONNull_instance;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONNull', 64);
function com_google_gwt_json_client_JSONNumber_JSONNumber__DV(value_0){
  this.com_google_gwt_json_client_JSONNumber_value = value_0;
}

function com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D(value_0){
  return value_0.com_google_gwt_json_client_JSONNumber_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(46, 218, {46:1}, com_google_gwt_json_client_JSONNumber_JSONNumber__DV);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONNumber_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 46)) {
    return false;
  }
  return this.com_google_gwt_json_client_JSONNumber_value == com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 46).com_google_gwt_json_client_JSONNumber_value;
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONNumber_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONNumber_unwrap__Lcom_google_gwt_json_client_JSONNumber_2D;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONNumber_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this.com_google_gwt_json_client_JSONNumber_value));
}
;
_.isNumber__Lcom_google_gwt_json_client_JSONNumber_2 = function com_google_gwt_json_client_JSONNumber_isNumber__Lcom_google_gwt_json_client_JSONNumber_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONNumber_toString__Ljava_lang_String_2(){
  return this.com_google_gwt_json_client_JSONNumber_value + '';
}
;
_.com_google_gwt_json_client_JSONNumber_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONNumber_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONNumber', 46);
function com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this$static, result){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  if (key == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key);
}

function com_google_gwt_json_client_JSONObject_$get0__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this$static, key){
  var jsObject = this$static.com_google_gwt_json_client_JSONObject_jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = (com_google_gwt_json_client_JSONParser_$clinit__V() , com_google_gwt_json_client_JSONParser_typeMap)[typeof v];
  var ret = func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  return ret;
}

function com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(jsValue){
  this.com_google_gwt_json_client_JSONObject_jsObject = jsValue;
}

function com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(value_0){
  return value_0.com_google_gwt_json_client_JSONObject_jsObject;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(66, 218, {66:1}, com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONObject_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 66)) {
    return false;
  }
  return com_google_gwt_core_client_JavaScriptObject_$equals__Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONObject_jsObject, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 66).com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONObject_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONObject_unwrap__Lcom_google_gwt_json_client_JSONObject_2Lcom_google_gwt_core_client_JavaScriptObject_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONObject_hashCode__I(){
  return com_google_gwt_core_client_JavaScriptObject_$hashCode__Lcom_google_gwt_core_client_JavaScriptObject_2I(this.com_google_gwt_json_client_JSONObject_jsObject);
}
;
_.isObject__Lcom_google_gwt_json_client_JSONObject_2 = function com_google_gwt_json_client_JSONObject_isObject__Lcom_google_gwt_json_client_JSONObject_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONObject_toString__Ljava_lang_String_2(){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V('{');
  first = true;
  keys_0 = com_google_gwt_json_client_JSONObject_$computeKeys0__Lcom_google_gwt_json_client_JSONObject_2_3Ljava_lang_String_2_3Ljava_lang_String_2(this, com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, $intern_14, 2, 0, 6, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.java_lang_AbstractStringBuilder_string += ', ' , sb);
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(key));
    sb.java_lang_AbstractStringBuilder_string += ':';
    java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(sb, com_google_gwt_json_client_JSONObject_$get__Lcom_google_gwt_json_client_JSONObject_2Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(this, key));
  }
  sb.java_lang_AbstractStringBuilder_string += '}';
  return sb.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONObject_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONObject', 66);
function com_google_gwt_json_client_JSONParser_$clinit__V(){
  com_google_gwt_json_client_JSONParser_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_json_client_JSONParser_typeMap = {'boolean':com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2, 'number':com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2, 'string':com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2, 'object':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'function':com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2, 'undefined':com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2};
}

function com_google_gwt_json_client_JSONParser_createBoolean__ZLcom_google_gwt_json_client_JSONValue_2(v){
  return com_google_gwt_json_client_JSONBoolean_$clinit__V() , v?com_google_gwt_json_client_JSONBoolean_TRUE:com_google_gwt_json_client_JSONBoolean_FALSE;
}

function com_google_gwt_json_client_JSONParser_createNumber__DLcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONNumber_JSONNumber__DV(v);
}

function com_google_gwt_json_client_JSONParser_createObject__Ljava_lang_Object_2Lcom_google_gwt_json_client_JSONValue_2(o){
  if (!o) {
    return com_google_gwt_json_client_JSONNull_$clinit__V() , com_google_gwt_json_client_JSONNull_instance;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
    return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new com_google_gwt_json_client_JSONArray_JSONArray__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
   else {
    return new com_google_gwt_json_client_JSONObject_JSONObject__Lcom_google_gwt_core_client_JavaScriptObject_2V(o);
  }
}

function com_google_gwt_json_client_JSONParser_createString__Ljava_lang_String_2Lcom_google_gwt_json_client_JSONValue_2(v){
  return new com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(v);
}

function com_google_gwt_json_client_JSONParser_createUndefined__Lcom_google_gwt_json_client_JSONValue_2(){
  return null;
}

function com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_32 + e);
    }
  }
   else {
    json = com_google_gwt_core_client_JsonUtils_escapeJsonForEval__Ljava_lang_String_2Ljava_lang_String_2(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V($intern_32 + e);
    }
  }
  var func = com_google_gwt_json_client_JSONParser_typeMap[typeof v];
  return func?func(v):com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeof v);
}

function com_google_gwt_json_client_JSONParser_parse__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  var ex;
  if (jsonString == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  if (jsonString.length == 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V('empty argument'));
  }
  try {
    return com_google_gwt_json_client_JSONParser_evaluate__Ljava_lang_String_2ZLcom_google_gwt_json_client_JSONValue_2(jsonString, false);
  }
   catch ($e0) {
    $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 16)) {
      ex = $e0;
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_Throwable_2V(ex));
    }
     else 
      throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
  }
}

function com_google_gwt_json_client_JSONParser_throwJSONException__Ljava_lang_String_2V(message){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V(message));
}

function com_google_gwt_json_client_JSONParser_throwUnknownTypeException__Ljava_lang_String_2V(typeString){
  com_google_gwt_json_client_JSONParser_$clinit__V();
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_json_client_JSONException_JSONException__Ljava_lang_String_2V("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team"));
}

var com_google_gwt_json_client_JSONParser_typeMap;
function com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V(value_0){
  if (value_0 == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  this.com_google_gwt_json_client_JSONString_value = value_0;
}

function com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2(value_0){
  return value_0.com_google_gwt_json_client_JSONString_value;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(47, 218, {47:1}, com_google_gwt_json_client_JSONString_JSONString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_json_client_JSONString_equals__Ljava_lang_Object_2Z(other){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 47)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_json_client_JSONString_value, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 47).com_google_gwt_json_client_JSONString_value);
}
;
_.package_private$com_google_gwt_json_client$getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2 = function com_google_gwt_json_client_JSONString_getUnwrapper__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  return com_google_gwt_json_client_JSONString_unwrap__Lcom_google_gwt_json_client_JSONString_2Ljava_lang_String_2;
}
;
_.hashCode__I = function com_google_gwt_json_client_JSONString_hashCode__I(){
  return javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_json_client_JSONString_value);
}
;
_.isString__Lcom_google_gwt_json_client_JSONString_2 = function com_google_gwt_json_client_JSONString_isString__Lcom_google_gwt_json_client_JSONString_2(){
  return this;
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_json_client_JSONString_toString__Ljava_lang_String_2(){
  return com_google_gwt_core_client_JsonUtils_escapeValue__Ljava_lang_String_2Ljava_lang_String_2(this.com_google_gwt_json_client_JSONString_value);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1json_1client_1JSONString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_31, 'JSONString', 47);
function com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0){
  var elementTypeCategory;
  switch (com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array)) {
    case 6:
      return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(value_0);
    case 7:
      return com_google_gwt_lang_Cast_instanceOfDouble__Ljava_lang_Object_2Z(value_0);
    case 8:
      return com_google_gwt_lang_Cast_instanceOfBoolean__Ljava_lang_Object_2Z(value_0);
    case 3:
      return Array.isArray(value_0) && (elementTypeCategory = com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(value_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
    case 11:
      return value_0 != null && typeof value_0 === $intern_1;
    case 12:
      return value_0 != null && (typeof value_0 === $intern_0 || typeof value_0 == $intern_1);
    case 0:
      return com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    case 2:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V);
    case 1:
      return com_google_gwt_lang_Cast_isJsObjectOrFunction__Ljava_lang_Object_2Z(value_0) && !(value_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V) || com_google_gwt_lang_Cast_canCast__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(value_0, array.__elementTypeId$);
    default:return true;
  }
}

function com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions){
  return java_lang_Class_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(clazz, dimensions);
}

function com_google_gwt_lang_Array_getElementTypeCategory__Ljava_lang_Object_2I(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0);
  elementTypeCategory != 10 && com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function com_google_gwt_lang_Array_initializeArrayElementsWithDefaults__IILjava_lang_Object_2(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function com_google_gwt_lang_Array_isJavaArray__Ljava_lang_Object_2Z(src_0){
  return Array.isArray(src_0) && src_0.java_lang_Object_typeMarker === com_google_gwt_lang_Runtime_typeMarkerFn__V;
}

function com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(array, index_0, value_0){
  javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(value_0 == null || com_google_gwt_lang_Array_canSet__Ljava_lang_Object_2Ljava_lang_Object_2Z(array, value_0));
  return array[index_0] = value_0;
}

function com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.java_lang_Object__1_1_1clazz = arrayClass;
  array.java_lang_Object_castableTypeMap = castableTypeMap;
  array.java_lang_Object_typeMarker = com_google_gwt_lang_Runtime_typeMarkerFn__V;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2(e){
  var javaException;
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(e, 4)) {
    return e;
  }
  javaException = e && e[$intern_16];
  if (!javaException) {
    javaException = new com_google_gwt_core_client_JavaScriptException_JavaScriptException__Ljava_lang_Object_2V(e);
    com_google_gwt_core_client_impl_StackTraceCreator_captureStackTrace__Ljava_lang_Object_2V(javaException);
  }
  return javaException;
}

function com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(t){
  return t.java_lang_Throwable_backingJsObject;
}

function com_google_gwt_lang_com_100046exampleproject_100046gwt_100046init_100046Init_1_1EntryMethodHolder_init__V(){
  $wnd.setTimeout($entry(com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V));
  com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V();
  com_google_gwt_logging_client_LogConfiguration_$clinit__V();
  org_fusesource_restygwt_client_Defaults_setServiceRoot__Ljava_lang_String_2V(com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2() + 'backend');
  com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V((com_google_gwt_user_client_ui_RootPanel_$clinit__V() , com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2()), new com_exampleproject_gwt_startpoint_client_views_MainView_MainView__V);
}

function com_google_gwt_logging_client_LogConfiguration_$clinit__V(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_logging_client_LogConfiguration_impl = new com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V;
}

function com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z(){
  com_google_gwt_logging_client_LogConfiguration_$clinit__V();
  if (!com_google_gwt_logging_client_LogConfiguration_impl) {
    return true;
  }
  return false;
}

var com_google_gwt_logging_client_LogConfiguration_impl;
function com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(93, 1, {}, com_google_gwt_logging_client_LogConfiguration$LogConfigurationImplNull_LogConfiguration$LogConfigurationImplNull__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1logging_1client_1LogConfiguration$LogConfigurationImplNull_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.logging.client', 'LogConfiguration/LogConfigurationImplNull', 93);
function com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V(uri_0){
  if (uri_0 == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('uri is null'));
  }
  this.com_google_gwt_safehtml_shared_SafeUriString_uri = uri_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(48, 1, {222:1, 48:1}, com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V);
_.equals__Ljava_lang_Object_2Z = function com_google_gwt_safehtml_shared_SafeUriString_equals__Ljava_lang_Object_2Z(obj){
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 48)) {
    return false;
  }
  return java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this.com_google_gwt_safehtml_shared_SafeUriString_uri, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 222), 48).com_google_gwt_safehtml_shared_SafeUriString_uri);
}
;
_.hashCode__I = function com_google_gwt_safehtml_shared_SafeUriString_hashCode__I(){
  return javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(this.com_google_gwt_safehtml_shared_SafeUriString_uri);
}
;
_.toString__Ljava_lang_String_2 = function com_google_gwt_safehtml_shared_SafeUriString_toString__Ljava_lang_String_2(){
  return 'safe: "' + this.com_google_gwt_safehtml_shared_SafeUriString_uri + '"';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1safehtml_1shared_1SafeUriString_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.safehtml.shared', 'SafeUriString', 48);
function com_google_gwt_safehtml_shared_UriUtils_$clinit__V(){
  com_google_gwt_safehtml_shared_UriUtils_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new RegExp('%5B', 'g');
  new RegExp('%5D', 'g');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(219, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1AbstractRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.text.shared', 'AbstractRenderer', 219);
function com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(184, 1, {}, com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V);
var com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughParser_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'PassthroughParser', 184);
function com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(183, 219, {}, com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V);
var com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1text_1shared_1testing_1PassthroughRenderer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_33, 'PassthroughRenderer', 183);
function com_google_gwt_user_client_DOM_$clinit__V(){
  com_google_gwt_user_client_DOM_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplMozilla_$clinit__V();
}

function com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, elem, listener){
  com_google_gwt_user_client_DOM_$clinit__V();
  var prevCurrentEvent;
  prevCurrentEvent = com_google_gwt_user_client_DOM_currentEvent;
  com_google_gwt_user_client_DOM_currentEvent = evt;
  elem == com_google_gwt_user_client_DOM_sCaptureElem && com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(evt.type) == 8192 && (com_google_gwt_user_client_DOM_sCaptureElem = null);
  listener.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(evt);
  com_google_gwt_user_client_DOM_currentEvent = prevCurrentEvent;
}

function com_google_gwt_user_client_DOM_isPotential__Lcom_google_gwt_core_client_JavaScriptObject_2Z(o){
  com_google_gwt_user_client_DOM_$clinit__V();
  try {
    return !!o && !!o.__gwt_resolve;
  }
   catch (e) {
    return false;
  }
}

function com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(maybePotential){
  com_google_gwt_user_client_DOM_$clinit__V();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function com_google_gwt_user_client_DOM_sinkBitlessEvent__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(elem, eventTypeName){
  var com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0, com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatcher_0;
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0 = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatcher_0 = com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0[eventTypeName] || com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatchMap_0['_default_'];
  elem.addEventListener(eventTypeName, com_google_gwt_user_client_impl_DOMImplStandard_$sinkBitlessEventImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V_dispatcher_0, false);
}

var com_google_gwt_user_client_DOM_currentEvent = null, com_google_gwt_user_client_DOM_sCaptureElem;
function com_google_gwt_user_client_DocumentModeAsserter_$onModuleLoad__Lcom_google_gwt_user_client_DocumentModeAsserter_2V(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit, 1), $intern_14, 2, 6, [$intern_34]);
  for (i = 0; i < allowedModes.length; i++) {
    if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_34, allowedModes[0]) && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function com_google_gwt_user_client_Event_getEventsSunk__Lcom_google_gwt_dom_client_Element_2I(elem){
  return com_google_gwt_user_client_DOM_$clinit__V() , elem.__eventBits || 0;
}

function com_google_gwt_user_client_Event_getTypeInt__Ljava_lang_String_2I(typeName){
  return com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I((com_google_gwt_user_client_DOM_$clinit__V() , typeName));
}

function com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplMozilla_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2IV(elem, eventBits);
}

function com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(handler){
  com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V();
  return com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(com_google_gwt_event_logical_shared_CloseEvent_TYPE?com_google_gwt_event_logical_shared_CloseEvent_TYPE:(com_google_gwt_event_logical_shared_CloseEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V), handler);
}

function com_google_gwt_user_client_Window_addHandler__Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(type_0, handler){
  return com_google_gwt_event_shared_HandlerManager_$addHandler__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent$Type_2Lcom_google_gwt_event_shared_EventHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers), type_0, handler);
}

function com_google_gwt_user_client_Window_alert__Ljava_lang_String_2V(msg){
  $wnd.alert(msg);
}

function com_google_gwt_user_client_Window_maybeInitializeCloseHandlers__V(){
  if (!com_google_gwt_user_client_Window_closeHandlersInitialized) {
    com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V();
    com_google_gwt_user_client_Window_closeHandlersInitialized = true;
  }
}

function com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2(){
  var event_0;
  if (com_google_gwt_user_client_Window_closeHandlersInitialized) {
    event_0 = new com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V;
    !!com_google_gwt_user_client_Window_handlers && com_google_gwt_event_shared_HandlerManager_$fireEvent__Lcom_google_gwt_event_shared_HandlerManager_2Lcom_google_gwt_event_shared_GwtEvent_2V(com_google_gwt_user_client_Window_handlers, event_0);
    return null;
  }
  return null;
}

var com_google_gwt_user_client_Window_closeHandlersInitialized = false, com_google_gwt_user_client_Window_handlers;
function com_google_gwt_user_client_Window$ClosingEvent_$clinit__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_Window$ClosingEvent_TYPE = new com_google_gwt_event_shared_GwtEvent$Type_GwtEvent$Type__V;
}

function com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V(){
  com_google_gwt_user_client_Window$ClosingEvent_$clinit__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(129, 210, {}, com_google_gwt_user_client_Window$ClosingEvent_Window$ClosingEvent__V);
_.dispatch__Lcom_google_gwt_event_shared_EventHandler_2V = function com_google_gwt_user_client_Window$ClosingEvent_dispatch__Lcom_google_gwt_event_shared_EventHandler_2V(handler){
  javaemul_internal_InternalPreconditions_checkCriticalType__ZV(handler == null);
  null.$_nullMethod();
}
;
_.getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2 = function com_google_gwt_user_client_Window$ClosingEvent_getAssociatedType__Lcom_google_gwt_event_shared_GwtEvent$Type_2(){
  return com_google_gwt_user_client_Window$ClosingEvent_TYPE;
}
;
var com_google_gwt_user_client_Window$ClosingEvent_TYPE;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$ClosingEvent_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Window/ClosingEvent', 129);
function com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V(){
  com_google_gwt_event_shared_HandlerManager_HandlerManager__Ljava_lang_Object_2V.call(this, null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(77, 60, {}, com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1Window$WindowHandlers_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_29, 'Window/WindowHandlers', 77);
function com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case $intern_25:
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case $intern_35:
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return 65536;
    case $intern_36:
    case 'mousewheel':
      return $intern_37;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return 4194304;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_38;
    case 'gesturechange':
      return $intern_39;
    case 'gestureend':
      return $intern_40;
    default:return -1;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V(){
  if (!com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized) {
    com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V();
    com_google_gwt_user_client_impl_DOMImplMozilla_$initSyntheticMouseUpEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2V();
    com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = true;
  }
}

function com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(elem){
  var maybeListener = elem.__listener;
  return !com_google_gwt_lang_Cast_instanceOfJso__Ljava_lang_Object_2Z(maybeListener) && com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(maybeListener, 7)?maybeListener:null;
}

function com_google_gwt_user_client_impl_DOMImpl_setEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(elem, listener){
  elem.__listener = listener;
}

var com_google_gwt_user_client_impl_DOMImpl_eventSystemIsInitialized = false;
function com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V(){
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers = {_default_:com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V, dragenter:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V, dragover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V};
  com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers = {click:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, dblclick:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousedown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousemove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseover:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mouseout:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, mousewheel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, keydown:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keyup:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, keypress:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V, touchstart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchmove:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, touchcancel:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturestart:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gestureend:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V, gesturechange:com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V};
}

function com_google_gwt_user_client_impl_DOMImplStandard_$initEventSystem__Lcom_google_gwt_user_client_impl_DOMImplStandard_2V(){
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V);
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent = $entry(com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V);
  var foreach = com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
  var bitlessEvents = com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(parent_0, toAdd, index_0){
  var count = 0, child = parent_0.firstChild, before = null;
  while (child) {
    if (child.nodeType == 1) {
      if (count == index_0) {
        before = child;
        break;
      }
      ++count;
    }
    child = child.nextSibling;
  }
  parent_0.insertBefore(toAdd, before);
}

function com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2 && (elem.ondblclick = bits & 2?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 32768 && (elem.onload = bits & 32768?com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent:null);
  chMask & 65536 && (elem.onerror = bits & 65536?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_37 && (elem.onmousewheel = bits & $intern_37?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 2097152 && (elem.ontouchmove = bits & 2097152?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 4194304 && (elem.ontouchend = bits & 4194304?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_38 && (elem.ongesturestart = bits & $intern_38?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_39 && (elem.ongesturechange = bits & $intern_39?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
  chMask & $intern_40 && (elem.ongestureend = bits & $intern_40?com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent:null);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_DOM_$clinit__V();
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V();
  com_google_gwt_user_client_DOM_$clinit__V();
  return;
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchDragEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  evt.preventDefault();
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt);
  if (!element) {
    return;
  }
  com_google_gwt_user_client_DOM_dispatchEvent__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2V(evt, element.nodeType != 1?null:element, com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(element));
}

function com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent__Lcom_google_gwt_user_client_Event_2V(evt){
  var element;
  element = evt.currentTarget;
  element[$intern_41] = evt.type;
  com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent__Lcom_google_gwt_user_client_Event_2V(evt);
}

function com_google_gwt_user_client_impl_DOMImplStandard_getFirstAncestorWithListener__Lcom_google_gwt_user_client_Event_2Lcom_google_gwt_dom_client_Element_2(evt){
  var curElem;
  curElem = evt.currentTarget;
  while (!!curElem && !com_google_gwt_user_client_impl_DOMImpl_getEventListener__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_EventListener_2(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var com_google_gwt_user_client_impl_DOMImplStandard_bitlessEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_captureElem, com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers, com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent, com_google_gwt_user_client_impl_DOMImplStandard_dispatchUnhandledEvent;
function com_google_gwt_user_client_impl_DOMImplMozilla_$clinit__V(){
  com_google_gwt_user_client_impl_DOMImplMozilla_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V();
  com_google_gwt_user_client_impl_DOMImplStandard_captureEventDispatchers[$intern_36] = com_google_gwt_user_client_impl_DOMImplStandard_dispatchCapturedMouseEvent__Lcom_google_gwt_user_client_Event_2V;
}

function com_google_gwt_user_client_impl_DOMImplMozilla_$initSyntheticMouseUpEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2V(){
  $wnd.addEventListener('mouseout', $entry(function(evt){
    var cap = (com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_captureElem);
    if (cap && !evt.relatedTarget) {
      if ('html' == evt.target.tagName.toLowerCase()) {
        var muEvent = $doc.createEvent('MouseEvents');
        muEvent.initMouseEvent('mouseup', true, true, $wnd, 0, evt.screenX, evt.screenY, evt.clientX, evt.clientY, evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, evt.button, null);
        cap.dispatchEvent(muEvent);
      }
    }
  }
  ), true);
}

function com_google_gwt_user_client_impl_DOMImplMozilla_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits){
  com_google_gwt_user_client_impl_DOMImpl_$maybeInitializeEventSystem__Lcom_google_gwt_user_client_impl_DOMImpl_2V();
  com_google_gwt_user_client_impl_DOMImplStandard_$sinkEventsImpl__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2IV(elem, bits);
  bits & $intern_37 && elem.addEventListener($intern_36, (com_google_gwt_user_client_impl_DOMImplStandard_$clinit__V() , com_google_gwt_user_client_impl_DOMImplStandard_dispatchEvent), false);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static, elem){
  var index_0;
  index_0 = com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_dom_client_Element_2I(elem);
  if (index_0 < 0) {
    return null;
  }
  return com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index_0), 6);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2V(this$static, uiObject){
  var index_0;
  if (!this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList) {
    index_0 = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList.java_util_ArrayList_array.length;
    java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, uiObject);
  }
   else {
    index_0 = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index;
    java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index_0, uiObject);
    this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next;
  }
  (com_google_gwt_user_client_DOM_$clinit__V() , uiObject.com_google_gwt_user_client_ui_UIObject_element)[$intern_42] = index_0;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2V(this$static, elem){
  var index_0;
  index_0 = com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_dom_client_Element_2I(elem);
  elem[$intern_42] = null;
  java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList, index_0, null);
  this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = new com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V(index_0, this$static.com_google_gwt_user_client_impl_ElementMapperImpl_freeList);
}

function com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V(){
  this.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList = new java_util_ArrayList_ArrayList__V;
}

function com_google_gwt_user_client_impl_ElementMapperImpl_getIndex__Lcom_google_gwt_dom_client_Element_2I(elem){
  var index_0 = elem[$intern_42];
  return index_0 == null?-1:index_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(147, 1, {}, com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V);
_.com_google_gwt_user_client_impl_ElementMapperImpl_freeList = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'ElementMapperImpl', 147);
function com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V(index_0, next){
  this.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = index_0;
  this.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_next = next;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(148, 1, {}, com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_ElementMapperImpl$FreeNode__ILcom_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_2V);
_.com_google_gwt_user_client_impl_ElementMapperImpl$FreeNode_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1impl_1ElementMapperImpl$FreeNode_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_43, 'ElementMapperImpl/FreeNode', 148);
function com_google_gwt_user_client_impl_EventMap_foreach__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function com_google_gwt_user_client_impl_WindowImpl_$initWindowCloseHandler__Lcom_google_gwt_user_client_impl_WindowImpl_2V(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(com_google_gwt_user_client_Window_onClosing__Ljava_lang_String_2)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      com_google_gwt_user_client_Window_closeHandlersInitialized && com_google_gwt_event_logical_shared_CloseEvent_fire__Lcom_google_gwt_event_logical_shared_HasCloseHandlers_2Ljava_lang_Object_2ZV((!com_google_gwt_user_client_Window_handlers && (com_google_gwt_user_client_Window_handlers = new com_google_gwt_user_client_Window$WindowHandlers_Window$WindowHandlers__V) , com_google_gwt_user_client_Window_handlers));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(201, 5, $intern_44);
_.doAttachChildren__V = function com_google_gwt_user_client_ui_Panel_doAttachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_attachCommand));
}
;
_.doDetachChildren__V = function com_google_gwt_user_client_ui_Panel_doDetachChildren__V(){
  com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(this, (com_google_gwt_user_client_ui_AttachDetachException_$clinit__V() , com_google_gwt_user_client_ui_AttachDetachException_detachCommand));
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Panel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Panel', 201);
function com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, child, container){
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(child);
  com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, child);
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(container, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(child.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(child, this$static);
}

function com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, w){
  var elem;
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(w, null);
  }
   finally {
    elem = (com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem)), elem);
    com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static.com_google_gwt_user_client_ui_ComplexPanel_children, w);
  }
  return true;
}

function com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V(){
  this.com_google_gwt_user_client_ui_ComplexPanel_children = new com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(56, 201, $intern_44);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_ComplexPanel_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this.com_google_gwt_user_client_ui_ComplexPanel_children);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_ComplexPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  return com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ComplexPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'ComplexPanel', 56);
function com_google_gwt_user_client_ui_AbsolutePanel_$add__Lcom_google_gwt_user_client_ui_AbsolutePanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(99, 56, $intern_44);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_AbsolutePanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed;
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_user_client_ui_AbsolutePanel_changeToStaticPositioning__Lcom_google_gwt_dom_client_Element_2V((com_google_gwt_user_client_DOM_$clinit__V() , w.com_google_gwt_user_client_ui_UIObject_element));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AbsolutePanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AbsolutePanel', 99);
function com_google_gwt_user_client_ui_AttachDetachException_$clinit__V(){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_AttachDetachException_attachCommand = new com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V;
  com_google_gwt_user_client_ui_AttachDetachException_detachCommand = new com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V;
}

function com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(causes){
  com_google_gwt_event_shared_UmbrellaException_UmbrellaException__Ljava_util_Set_2V.call(this, causes);
}

function com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(hasWidgets, c){
  com_google_gwt_user_client_ui_AttachDetachException_$clinit__V();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator__Ljava_util_Iterator_2(); w$iterator.hasNext__Z();) {
    w = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(w$iterator.next__Ljava_lang_Object_2(), 5);
    try {
      c.execute__Lcom_google_gwt_user_client_ui_Widget_2V(w);
    }
     catch ($e0) {
      $e0 = com_google_gwt_lang_Exceptions_toJava__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
      if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($e0, 4)) {
        e = $e0;
        !caught && (caught = new java_util_HashSet_HashSet__V);
        java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(caught.java_util_HashSet_map, e, caught);
      }
       else 
        throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2($e0);
    }
  }
  if (caught) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V(caught));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(100, 70, $intern_26, com_google_gwt_user_client_ui_AttachDetachException_AttachDetachException__Ljava_util_Set_2V);
var com_google_gwt_user_client_ui_AttachDetachException_attachCommand, com_google_gwt_user_client_ui_AttachDetachException_detachCommand;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AttachDetachException', 100);
function com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(101, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$1_AttachDetachException$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onAttach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AttachDetachException/1', 101);
function com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(102, 1, {}, com_google_gwt_user_client_ui_AttachDetachException$2_AttachDetachException$2__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_AttachDetachException$2_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1AttachDetachException$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'AttachDetachException/2', 102);
function com_google_gwt_user_client_ui_FocusWidget_$clinit__V(){
  com_google_gwt_user_client_ui_FocusWidget_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_impl_FocusImpl_$clinit__V();
}

function com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(57, 5, $intern_7);
_.getTabIndex__I = function com_google_gwt_user_client_ui_FocusWidget_getTabIndex__I(){
  return (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).tabIndex;
}
;
_.onAttach__V = function com_google_gwt_user_client_ui_FocusWidget_onAttach__V(){
  var tabIndex;
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
  tabIndex = this.getTabIndex__I();
  -1 == tabIndex && this.setTabIndex__IV(0);
}
;
_.setTabIndex__IV = function com_google_gwt_user_client_ui_FocusWidget_setTabIndex__IV(index_0){
  com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV((com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element), index_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FocusWidget_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'FocusWidget', 57);
function com_google_gwt_user_client_ui_ButtonBase_$setText__Lcom_google_gwt_user_client_ui_ButtonBase_2Ljava_lang_String_2V(this$static){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).textContent = '\u041A\u043E\u0440\u0437\u0438\u043D\u0430';
}

function com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(81, 57, $intern_7);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ButtonBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'ButtonBase', 81);
function com_google_gwt_user_client_ui_Button_Button__V(){
  var com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0;
  com_google_gwt_user_client_ui_FocusWidget_$clinit__V();
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0 = $doc.createElement('BUTTON') , com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0.type = 'button' , com_google_gwt_dom_client_DOMImpl_$createButtonElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_ButtonElement_2_e_0));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-Button';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(41, 81, $intern_7, com_google_gwt_user_client_ui_Button_Button__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Button_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Button', 41);
function com_google_gwt_user_client_ui_CellPanel_$getWidgetTd__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2(this$static, w){
  if (w.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return null;
  }
  return com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(td, align_0){
  (com_google_gwt_user_client_DOM_$clinit__V() , td)['align'] = align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString;
}

function com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(this$static, w, align_0){
  var td;
  td = com_google_gwt_user_client_ui_CellPanel_$getWidgetTd__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2(this$static, w);
  !!td && ((com_google_gwt_user_client_DOM_$clinit__V() , td)['align'] = align_0.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString , undefined);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V((com_google_gwt_user_client_DOM_$clinit__V() , td), align_0);
}

function com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_user_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(td, align_0){
  td.style['verticalAlign'] = align_0.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString;
}

function com_google_gwt_user_client_ui_CellPanel_CellPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  this.com_google_gwt_user_client_ui_CellPanel_table = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('table'));
  this.com_google_gwt_user_client_ui_CellPanel_body = $doc.createElement('tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_table, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_CellPanel_body));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_CellPanel_table);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(73, 56, $intern_44);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CellPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'CellPanel', 73);
function com_google_gwt_user_client_ui_CheckBox_$setValue__Lcom_google_gwt_user_client_ui_CheckBox_2Ljava_lang_Boolean_2ZV(this$static, value_0){
  var oldValue;
  value_0 == null && (value_0 = (java_lang_Boolean_$clinit__V() , java_lang_Boolean_FALSE));
  oldValue = this$static.com_google_gwt_user_client_ui_Widget_attached?(java_lang_Boolean_$clinit__V() , this$static.com_google_gwt_user_client_ui_CheckBox_inputElem.checked?true:false):(java_lang_Boolean_$clinit__V() , this$static.com_google_gwt_user_client_ui_CheckBox_inputElem.defaultChecked?true:false);
  com_google_gwt_dom_client_InputElement_$setChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static.com_google_gwt_user_client_ui_CheckBox_inputElem, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) , value_0));
  com_google_gwt_dom_client_InputElement_$setDefaultChecked__Lcom_google_gwt_dom_client_InputElement_2ZV(this$static.com_google_gwt_user_client_ui_CheckBox_inputElem, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) , value_0));
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
  if (value_0 == oldValue) {
    return;
  }
}

function com_google_gwt_user_client_ui_CheckBox_CheckBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_FocusWidget_$clinit__V();
  com_google_gwt_user_client_ui_CheckBox_CheckBox__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'checkbox' , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0.value = 'on' , com_google_gwt_dom_client_DOMImpl_$createCheckInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
  this.com_google_gwt_user_client_ui_UIObject_element.className = 'gwt-CheckBox';
}

function com_google_gwt_user_client_ui_CheckBox_CheckBox__Lcom_google_gwt_dom_client_Element_2V(elem){
  var uid;
  com_google_gwt_user_client_ui_ButtonBase_ButtonBase__Lcom_google_gwt_dom_client_Element_2V.call(this, (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('span')));
  this.com_google_gwt_user_client_ui_CheckBox_inputElem = elem;
  this.com_google_gwt_user_client_ui_CheckBox_labelElem = $doc.createElement('label');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_UIObject_element, this.com_google_gwt_user_client_ui_CheckBox_inputElem);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_UIObject_element, this.com_google_gwt_user_client_ui_CheckBox_labelElem);
  uid = com_google_gwt_dom_client_Document_$createUniqueId__Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2($doc);
  this.com_google_gwt_user_client_ui_CheckBox_inputElem['id'] = uid;
  com_google_gwt_dom_client_LabelElement_$setHtmlFor__Lcom_google_gwt_dom_client_LabelElement_2Ljava_lang_String_2V(this.com_google_gwt_user_client_ui_CheckBox_labelElem, uid);
  this.com_google_gwt_user_client_ui_CheckBox_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_CheckBox_labelElem);
  !!this.com_google_gwt_user_client_ui_CheckBox_inputElem && (this.com_google_gwt_user_client_ui_CheckBox_inputElem.tabIndex = 0 , undefined);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(83, 81, $intern_7, com_google_gwt_user_client_ui_CheckBox_CheckBox__V);
_.getTabIndex__I = function com_google_gwt_user_client_ui_CheckBox_getTabIndex__I(){
  return this.com_google_gwt_user_client_ui_CheckBox_inputElem.tabIndex;
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_CheckBox_onLoad__V(){
  com_google_gwt_user_client_DOM_$clinit__V();
  this.com_google_gwt_user_client_ui_CheckBox_inputElem.__listener = this;
}
;
_.onUnload__V = function com_google_gwt_user_client_ui_CheckBox_onUnload__V(){
  com_google_gwt_user_client_DOM_$clinit__V();
  this.com_google_gwt_user_client_ui_CheckBox_inputElem.__listener = null;
  com_google_gwt_user_client_ui_CheckBox_$setValue__Lcom_google_gwt_user_client_ui_CheckBox_2Ljava_lang_Boolean_2ZV(this, this.com_google_gwt_user_client_ui_Widget_attached?(java_lang_Boolean_$clinit__V() , this.com_google_gwt_user_client_ui_CheckBox_inputElem.checked?true:false):(java_lang_Boolean_$clinit__V() , this.com_google_gwt_user_client_ui_CheckBox_inputElem.defaultChecked?true:false));
}
;
_.setTabIndex__IV = function com_google_gwt_user_client_ui_CheckBox_setTabIndex__IV(index_0){
  !!this.com_google_gwt_user_client_ui_CheckBox_inputElem && com_google_gwt_dom_client_Element_$setTabIndex__Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_CheckBox_inputElem, index_0);
}
;
_.sinkEvents__IV = function com_google_gwt_user_client_ui_CheckBox_sinkEvents__IV(eventBitsToAdd){
  this.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_CheckBox_inputElem, eventBitsToAdd | com_google_gwt_user_client_Event_getEventsSunk__Lcom_google_gwt_dom_client_Element_2I(this.com_google_gwt_user_client_ui_CheckBox_inputElem)):this.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?(com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImplMozilla_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2IV(this.com_google_gwt_user_client_ui_UIObject_element, eventBitsToAdd | (this.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0))):(this.com_google_gwt_user_client_ui_Widget_eventsToSink |= eventBitsToAdd);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1CheckBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'CheckBox', 83);
function com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static, content){
  com_google_gwt_dom_client_DOMImplStandard_$setInnerText__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, content);
  if (this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir != this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir) {
    this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
    com_google_gwt_i18n_client_BidiUtils_setDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2V(this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_element, this$static.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir);
  }
}

function com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(element){
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_element = element;
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir = com_google_gwt_i18n_client_BidiUtils_getDirectionOnElement__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2(element);
  this.com_google_gwt_user_client_ui_DirectionalTextHelper_textDir = this.com_google_gwt_user_client_ui_DirectionalTextHelper_initialElementDir;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(86, 1, {}, com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1DirectionalTextHelper_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'DirectionalTextHelper', 86);
function com_google_gwt_user_client_ui_FlowPanel_$add__Lcom_google_gwt_user_client_ui_FlowPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element));
}

function com_google_gwt_user_client_ui_FlowPanel_FlowPanel__V(){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, $doc.createElement('div'));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(88, 56, $intern_44, com_google_gwt_user_client_ui_FlowPanel_FlowPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1FlowPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'FlowPanel', 88);
function com_google_gwt_user_client_ui_HTMLTable_$checkCellBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this$static, row, column){
  var cellSize;
  com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row);
  if (column < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Column ' + column + ' must be non-negative: ' + column));
  }
  cellSize = this$static.com_google_gwt_user_client_ui_Grid_numColumns;
  if (cellSize <= column) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_45 + column + $intern_46 + this$static.com_google_gwt_user_client_ui_Grid_numColumns));
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$checkRowBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row){
  var rowSize;
  rowSize = this$static.com_google_gwt_user_client_ui_Grid_numRows;
  if (row >= rowSize || row < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Row index: ' + row + ', Row size: ' + rowSize));
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_dom_client_Element_2(this$static, row, column, clearInnerHTML){
  var td;
  td = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter, row, column);
  com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , td), clearInnerHTML);
  return td;
}

function com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getFirstChildElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  widget = null;
  !!maybeChild && (widget = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(com_google_gwt_user_client_impl_ElementMapperImpl_$get__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_UIObject_2(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, maybeChild), 5));
  if (widget) {
    com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && (td.innerHTML = '' , undefined);
    return false;
  }
}

function com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this$static, widget){
  var elem;
  if (widget.com_google_gwt_user_client_ui_Widget_parent != this$static) {
    return false;
  }
  try {
    com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, null);
  }
   finally {
    elem = (com_google_gwt_user_client_DOM_$clinit__V() , widget.com_google_gwt_user_client_ui_UIObject_element);
    com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2((null , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(elem)), elem);
    com_google_gwt_user_client_impl_ElementMapperImpl_$removeByElement__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_dom_client_Element_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, elem);
  }
  return true;
}

function com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row){
  var column, columnCount, td;
  columnCount = this$static.com_google_gwt_user_client_ui_Grid_numColumns;
  for (column = 0; column < columnCount; ++column) {
    td = com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter, row, column);
    com_google_gwt_user_client_ui_HTMLTable_$internalClearCell__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_Element_2ZZ(this$static, (com_google_gwt_user_client_DOM_$clinit__V() , td), false);
  }
  com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, row));
}

function com_google_gwt_user_client_ui_HTMLTable_$setCellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2V(this$static, cellFormatter){
  this$static.com_google_gwt_user_client_ui_HTMLTable_cellFormatter = cellFormatter;
}

function com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static, formatter){
  !!this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter && (formatter.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup);
  this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter = formatter;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter);
}

function com_google_gwt_user_client_ui_HTMLTable_$setWidget__Lcom_google_gwt_user_client_ui_HTMLTable_2IILcom_google_gwt_user_client_ui_Widget_2V(this$static, column, widget){
  var td;
  com_google_gwt_user_client_ui_Grid_$prepareCell__Lcom_google_gwt_user_client_ui_Grid_2IIV(this$static, column);
  td = com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_dom_client_Element_2(this$static, 0, column, true);
  com_google_gwt_user_client_ui_Widget_$removeFromParent__Lcom_google_gwt_user_client_ui_Widget_2V(widget);
  com_google_gwt_user_client_impl_ElementMapperImpl_$put__Lcom_google_gwt_user_client_impl_ElementMapperImpl_2Lcom_google_gwt_user_client_ui_UIObject_2V(this$static.com_google_gwt_user_client_ui_HTMLTable_widgetMap, widget);
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(td, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(widget.com_google_gwt_user_client_ui_UIObject_element));
  com_google_gwt_user_client_ui_Widget_$setParent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_ui_Widget_2V(widget, this$static);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(118, 201, $intern_44);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_HTMLTable_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this);
}
;
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_HTMLTable_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(widget){
  return com_google_gwt_user_client_ui_HTMLTable_$remove__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, widget);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HTMLTable', 118);
function com_google_gwt_user_client_ui_Grid_$prepareCell__Lcom_google_gwt_user_client_ui_Grid_2IIV(this$static, column){
  com_google_gwt_user_client_ui_Grid_$prepareRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static);
  if (column < 0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Cannot access a column with a negative index: ' + column));
  }
  if (column >= this$static.com_google_gwt_user_client_ui_Grid_numColumns) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V($intern_45 + column + $intern_46 + this$static.com_google_gwt_user_client_ui_Grid_numColumns));
  }
}

function com_google_gwt_user_client_ui_Grid_$prepareRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  if (0 >= this$static.com_google_gwt_user_client_ui_Grid_numRows) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Row index: 0, Row size: ' + this$static.com_google_gwt_user_client_ui_Grid_numRows));
  }
}

function com_google_gwt_user_client_ui_Grid_$removeRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, row){
  com_google_gwt_user_client_ui_HTMLTable_$removeRow__Lcom_google_gwt_user_client_ui_HTMLTable_2IV(this$static, row);
  --this$static.com_google_gwt_user_client_ui_Grid_numRows;
}

function com_google_gwt_user_client_ui_Grid_$resizeColumns__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  var i, j, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0, com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0;
  if (this$static.com_google_gwt_user_client_ui_Grid_numColumns == 5) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_Grid_numColumns > 5) {
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_Grid_numRows; i++) {
      for (j = this$static.com_google_gwt_user_client_ui_Grid_numColumns - 1; j >= 5; j--) {
        com_google_gwt_user_client_ui_HTMLTable_$checkCellBounds__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV(this$static, i, j);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0 = com_google_gwt_user_client_ui_HTMLTable_$cleanCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIZLcom_google_gwt_dom_client_Element_2(this$static, i, j, false);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0 = com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, i);
        com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0.removeChild(com_google_gwt_user_client_ui_HTMLTable_$removeCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0);
      }
    }
  }
   else {
    for (i = 0; i < this$static.com_google_gwt_user_client_ui_Grid_numRows; i++) {
      for (j = this$static.com_google_gwt_user_client_ui_Grid_numColumns; j < 5; j++) {
        com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0 = com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem, i);
        com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0 = (com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0 = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('td')) , com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0.innerHTML = '&nbsp;' , com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_com_google_gwt_user_client_ui_Grid_$createCell__Lcom_google_gwt_user_client_ui_Grid_2Lcom_google_gwt_user_client_Element_2_td_0_0);
        com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_tr_0, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(com_google_gwt_user_client_ui_HTMLTable_$insertCell__Lcom_google_gwt_user_client_ui_HTMLTable_2IIV_td_0), j);
      }
    }
  }
  this$static.com_google_gwt_user_client_ui_Grid_numColumns = 5;
  com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$resizeColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2IZV(this$static.com_google_gwt_user_client_ui_HTMLTable_columnFormatter, 5, false);
}

function com_google_gwt_user_client_ui_Grid_$resizeRows__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static){
  if (this$static.com_google_gwt_user_client_ui_Grid_numRows == 4) {
    return;
  }
  if (this$static.com_google_gwt_user_client_ui_Grid_numRows < 4) {
    com_google_gwt_user_client_ui_Grid_addRows__Lcom_google_gwt_dom_client_Element_2IIV((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_HTMLTable_bodyElem), 4 - this$static.com_google_gwt_user_client_ui_Grid_numRows, this$static.com_google_gwt_user_client_ui_Grid_numColumns);
    this$static.com_google_gwt_user_client_ui_Grid_numRows = 4;
  }
   else {
    while (this$static.com_google_gwt_user_client_ui_Grid_numRows > 4) {
      com_google_gwt_user_client_ui_Grid_$removeRow__Lcom_google_gwt_user_client_ui_Grid_2IV(this$static, this$static.com_google_gwt_user_client_ui_Grid_numRows - 1);
    }
  }
}

function com_google_gwt_user_client_ui_Grid_Grid__IIV(){
  this.com_google_gwt_user_client_ui_HTMLTable_widgetMap = new com_google_gwt_user_client_impl_ElementMapperImpl_ElementMapperImpl__V;
  this.com_google_gwt_user_client_ui_HTMLTable_tableElem = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('table'));
  this.com_google_gwt_user_client_ui_HTMLTable_bodyElem = $doc.createElement('tbody');
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_HTMLTable_tableElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_HTMLTable_bodyElem));
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2V(this, this.com_google_gwt_user_client_ui_HTMLTable_tableElem);
  com_google_gwt_user_client_ui_HTMLTable_$setCellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2V(this, new com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this));
  com_google_gwt_user_client_ui_HTMLTable_$setColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this, new com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this));
  com_google_gwt_user_client_ui_Grid_$resizeColumns__Lcom_google_gwt_user_client_ui_Grid_2IV(this);
  com_google_gwt_user_client_ui_Grid_$resizeRows__Lcom_google_gwt_user_client_ui_Grid_2IV(this);
}

function com_google_gwt_user_client_ui_Grid_addRows__Lcom_google_gwt_dom_client_Element_2IIV(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(72, 118, $intern_44, com_google_gwt_user_client_ui_Grid_Grid__IIV);
_.com_google_gwt_user_client_ui_Grid_numColumns = 0;
_.com_google_gwt_user_client_ui_Grid_numRows = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Grid_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Grid', 72);
function com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this$static){
  while (++this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_array.length) {
    if (java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex) != null) {
      return;
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$1_$next__Lcom_google_gwt_user_client_ui_HTMLTable$1_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  var result;
  if (this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex >= this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_array.length) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  result = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static.com_google_gwt_user_client_ui_HTMLTable$1_widgetList, this$static.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex), 5);
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this$static);
  return result;
}

function com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$1_this$01 = this$0;
  this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList = this.com_google_gwt_user_client_ui_HTMLTable$1_this$01.com_google_gwt_user_client_ui_HTMLTable_widgetMap.com_google_gwt_user_client_impl_ElementMapperImpl_uiObjectList;
  com_google_gwt_user_client_ui_HTMLTable$1_$findNext__Lcom_google_gwt_user_client_ui_HTMLTable$1_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(117, 1, {}, com_google_gwt_user_client_ui_HTMLTable$1_HTMLTable$1__Lcom_google_gwt_user_client_ui_HTMLTable_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_HTMLTable$1_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_HTMLTable$1_$next__Lcom_google_gwt_user_client_ui_HTMLTable$1_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_HTMLTable$1_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex < this.com_google_gwt_user_client_ui_HTMLTable$1_widgetList.java_util_ArrayList_array.length;
}
;
_.com_google_gwt_user_client_ui_HTMLTable$1_nextIndex = -1;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HTMLTable/1', 117);
function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getCellElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2Lcom_google_gwt_dom_client_Element_2IILcom_google_gwt_dom_client_Element_2(tbody, row, col){
  return tbody.rows[row].cells[col];
}

function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getRawElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2IILcom_google_gwt_dom_client_Element_2(this$static, row, column){
  return com_google_gwt_user_client_ui_HTMLTable$CellFormatter_$getCellElement__Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2Lcom_google_gwt_dom_client_Element_2IILcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$01.com_google_gwt_user_client_ui_HTMLTable_bodyElem, row, column);
}

function com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$CellFormatter_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(115, 1, {}, com_google_gwt_user_client_ui_HTMLTable$CellFormatter_HTMLTable$CellFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$CellFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HTMLTable/CellFormatter', 115);
function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$prepareColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2V(this$static){
  if (!this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup) {
    this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('colgroup'));
    com_google_gwt_user_client_impl_DOMImplStandard_$insertChild__Lcom_google_gwt_user_client_impl_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2IV(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$01.com_google_gwt_user_client_ui_HTMLTable_tableElem, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup), 0);
    com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2($doc.createElement('col')));
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_$resizeColumnGroup__Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2IZV(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, $doc.createElement('col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup, this$static.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_columnGroup.lastChild);
    }
  }
}

function com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V(this$0){
  this.com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(116, 1, {}, com_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_HTMLTable$ColumnFormatter__Lcom_google_gwt_user_client_ui_HTMLTable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HTMLTable$ColumnFormatter_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HTMLTable/ColumnFormatter', 116);
function com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_dom_client_Element_2ILcom_google_gwt_user_client_Element_2(tbody, row){
  return com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_user_client_Element_2ILcom_google_gwt_user_client_Element_2((com_google_gwt_user_client_DOM_$clinit__V() , tbody), row);
}

function com_google_gwt_user_client_ui_HTMLTable$RowFormatter_$getRow__Lcom_google_gwt_user_client_ui_HTMLTable$RowFormatter_2Lcom_google_gwt_user_client_Element_2ILcom_google_gwt_user_client_Element_2(tbody, row){
  return com_google_gwt_user_client_DOM_$clinit__V() , tbody.rows[row];
}

function com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V((com_google_gwt_dom_client_Style$TextAlign_$clinit__V() , 'center'));
  new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('justify');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('left');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT = new com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V('right');
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT;
  com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT = com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START;
}

var com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LEFT, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1LOCALE_1START, com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1RIGHT;
function com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('bottom');
  new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('middle');
  com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP = new com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V('top');
}

var com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP;
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(206, 1, {});
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$AutoHorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 206);
function com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V(textAlignString){
  this.com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_textAlignString = textAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(38, 206, {}, com_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_HasHorizontalAlignment$HorizontalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasHorizontalAlignment$HorizontalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HasHorizontalAlignment/HorizontalAlignmentConstant', 38);
function com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V(verticalAlignString){
  this.com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_verticalAlignString = verticalAlignString;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(58, 1, {}, com_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_HasVerticalAlignment$VerticalAlignmentConstant__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HasVerticalAlignment$VerticalAlignmentConstant_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HasVerticalAlignment/VerticalAlignmentConstant', 58);
function com_google_gwt_user_client_ui_HorizontalPanel_$add__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  td = (com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('td')) , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign) , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign) , com_google_gwt_user_client_ui_HorizontalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_HorizontalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_HorizontalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_HorizontalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('tr'));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow));
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_9] = '0';
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_47] = '0';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(42, 73, $intern_44, com_google_gwt_user_client_ui_HorizontalPanel_HorizontalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_HorizontalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_HorizontalPanel_tableRow, td);
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1HorizontalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'HorizontalPanel', 42);
function com_google_gwt_user_client_ui_Image_$clinit__V(){
  com_google_gwt_user_client_ui_Image_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  new java_util_HashMap_HashMap__V;
}

function com_google_gwt_user_client_ui_Image_$changeState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_user_client_ui_Image$State_2V(this$static, newState){
  this$static.com_google_gwt_user_client_ui_Image_state = newState;
}

function com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V(this$static, url_0){
  !!this$static.com_google_gwt_user_client_ui_Image_state && ((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element)[$intern_41] = '' , undefined);
  com_google_gwt_dom_client_ImageElement_$setSrc__Lcom_google_gwt_dom_client_ImageElement_2Ljava_lang_String_2V((com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element), url_0.com_google_gwt_safehtml_shared_SafeUriString_uri);
}

function com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Ljava_lang_String_2V(this$static, url_0){
  com_google_gwt_user_client_ui_Image_$setUrl__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_safehtml_shared_SafeUri_2V(this$static, (com_google_gwt_safehtml_shared_UriUtils_$clinit__V() , new com_google_gwt_safehtml_shared_SafeUriString_SafeUriString__Ljava_lang_String_2V(url_0)));
}

function com_google_gwt_user_client_ui_Image_Image__V(){
  com_google_gwt_user_client_ui_Image_$clinit__V();
  com_google_gwt_user_client_ui_Image_$changeState__Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_user_client_ui_Image$State_2V(this, new com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2V(this));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-Image';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(172, 5, $intern_7, com_google_gwt_user_client_ui_Image_Image__V);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_Image_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  com_google_gwt_user_client_DOM_$clinit__V();
  com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type) == 32768 && !!this.com_google_gwt_user_client_ui_Image_state && (this.com_google_gwt_user_client_ui_UIObject_element[$intern_41] = '' , undefined);
  com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_Image_onLoad__V(){
  com_google_gwt_user_client_ui_Image$State_$onLoad__Lcom_google_gwt_user_client_ui_Image$State_2Lcom_google_gwt_user_client_ui_Image_2V(this.com_google_gwt_user_client_ui_Image_state, this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Image', 172);
function com_google_gwt_user_client_ui_Image$State_$onLoad__Lcom_google_gwt_user_client_ui_Image$State_2Lcom_google_gwt_user_client_ui_Image_2V(this$static, image){
  var unhandledEvent;
  unhandledEvent = com_google_gwt_dom_client_Element_$getPropertyString__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2Ljava_lang_String_2((com_google_gwt_user_client_DOM_$clinit__V() , image.com_google_gwt_user_client_ui_UIObject_element), $intern_41);
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_35, unhandledEvent) && (this$static.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = new com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V(this$static, image) , com_google_gwt_core_client_impl_SchedulerImpl_$scheduleDeferred__Lcom_google_gwt_core_client_impl_SchedulerImpl_2Lcom_google_gwt_core_client_Scheduler$ScheduledCommand_2V((com_google_gwt_core_client_impl_SchedulerImpl_$clinit__V() , com_google_gwt_core_client_impl_SchedulerImpl_INSTANCE), this$static.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(173, 1, {});
_.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = null;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$State_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Image/State', 173);
function com_google_gwt_user_client_ui_Image$State$1_$execute__Lcom_google_gwt_user_client_ui_Image$State$1_2V(this$static){
  var evt, com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0;
  if (this$static.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_Image_state != this$static.com_google_gwt_user_client_ui_Image$State$1_this$11 || this$static != this$static.com_google_gwt_user_client_ui_Image$State$1_this$11.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand) {
    return;
  }
  this$static.com_google_gwt_user_client_ui_Image$State$1_this$11.com_google_gwt_user_client_ui_Image$State_syntheticEventCommand = null;
  if (!this$static.com_google_gwt_user_client_ui_Image$State$1_val$image2.com_google_gwt_user_client_ui_Widget_attached) {
    com_google_gwt_user_client_ui_Image$UnclippedState_$getImageElement__Lcom_google_gwt_user_client_ui_Image$UnclippedState_2Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_dom_client_ImageElement_2(this$static.com_google_gwt_user_client_ui_Image$State$1_val$image2)[$intern_41] = $intern_35;
    return;
  }
  evt = (com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0 = $doc.createEvent('HTMLEvents') , com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0.initEvent($intern_35, false, false) , com_google_gwt_dom_client_DOMImplStandard_$createHtmlEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2ZZLcom_google_gwt_dom_client_NativeEvent_2_evt_0);
  com_google_gwt_dom_client_DOMImplStandard_$dispatchEvent__Lcom_google_gwt_dom_client_DOMImplStandard_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_NativeEvent_2V(com_google_gwt_user_client_ui_Image$UnclippedState_$getImageElement__Lcom_google_gwt_user_client_ui_Image$UnclippedState_2Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_dom_client_ImageElement_2(this$static.com_google_gwt_user_client_ui_Image$State$1_val$image2), evt);
}

function com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V(this$1, val$image){
  this.com_google_gwt_user_client_ui_Image$State$1_this$11 = this$1;
  this.com_google_gwt_user_client_ui_Image$State$1_val$image2 = val$image;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(175, 1, {}, com_google_gwt_user_client_ui_Image$State$1_Image$State$1__Lcom_google_gwt_user_client_ui_Image$State_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$State$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Image/State/1', 175);
function com_google_gwt_user_client_ui_Image$UnclippedState_$getImageElement__Lcom_google_gwt_user_client_ui_Image$UnclippedState_2Lcom_google_gwt_user_client_ui_Image_2Lcom_google_gwt_dom_client_ImageElement_2(image){
  return com_google_gwt_user_client_DOM_$clinit__V() , image.com_google_gwt_user_client_ui_UIObject_element;
}

function com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2V(image){
  com_google_gwt_user_client_ui_Widget_$replaceElement__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_dom_client_Element_2V(image, $doc.createElement('img'));
  com_google_gwt_user_client_Event_sinkEvents__Lcom_google_gwt_dom_client_Element_2IV((com_google_gwt_user_client_DOM_$clinit__V() , image.com_google_gwt_user_client_ui_UIObject_element), 32768);
  image.com_google_gwt_user_client_ui_Widget_eventsToSink == -1?com_google_gwt_user_client_impl_DOMImplMozilla_$sinkEvents__Lcom_google_gwt_user_client_impl_DOMImplMozilla_2Lcom_google_gwt_dom_client_Element_2IV(image.com_google_gwt_user_client_ui_UIObject_element, 133398655 | (image.com_google_gwt_user_client_ui_UIObject_element.__eventBits || 0)):(image.com_google_gwt_user_client_ui_Widget_eventsToSink |= 133398655);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(174, 173, {}, com_google_gwt_user_client_ui_Image$UnclippedState_Image$UnclippedState__Lcom_google_gwt_user_client_ui_Image_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Image$UnclippedState_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Image/UnclippedState', 174);
function com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV(element){
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , element));
  this.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper = new com_google_gwt_user_client_ui_DirectionalTextHelper_DirectionalTextHelper__Lcom_google_gwt_dom_client_Element_2ZV(this.com_google_gwt_user_client_ui_UIObject_element);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(82, 5, $intern_7);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1LabelBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'LabelBase', 82);
function com_google_gwt_user_client_ui_Label_$setText__Lcom_google_gwt_user_client_ui_Label_2Ljava_lang_String_2V(this$static, text_0){
  com_google_gwt_user_client_ui_DirectionalTextHelper_$setTextOrHtml__Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2Ljava_lang_String_2ZV(this$static.com_google_gwt_user_client_ui_LabelBase_directionalTextHelper, text_0);
}

function com_google_gwt_user_client_ui_Label_Label__V(){
  com_google_gwt_user_client_ui_LabelBase_LabelBase__Lcom_google_gwt_dom_client_Element_2ZV.call(this, $doc.createElement('div'));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-Label';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(15, 82, $intern_7, com_google_gwt_user_client_ui_Label_Label__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Label_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'Label', 15);
function com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2IV(this$static, item_0){
  com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2Ljava_lang_String_2IV(this$static, item_0, item_0, -1);
}

function com_google_gwt_user_client_ui_ListBox_$insertItem__Lcom_google_gwt_user_client_ui_ListBox_2Ljava_lang_String_2Lcom_google_gwt_i18n_client_HasDirection$Direction_2Ljava_lang_String_2IV(this$static, item_0, value_0, index_0){
  var before, itemCount, option, select;
  select = (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element);
  option = $doc.createElement('option');
  option.text = item_0;
  option.removeAttribute('bidiwrapped');
  option.value = value_0;
  itemCount = select.options.length;
  (index_0 < 0 || index_0 > itemCount) && (index_0 = itemCount);
  if (index_0 == itemCount) {
    select.add(option, null);
  }
   else {
    before = select.options[index_0];
    select.add(option, before);
  }
}

function com_google_gwt_user_client_ui_ListBox_$setVisibleItemCount__Lcom_google_gwt_user_client_ui_ListBox_2IV(this$static){
  (com_google_gwt_user_client_DOM_$clinit__V() , this$static.com_google_gwt_user_client_ui_UIObject_element).size = 1;
}

function com_google_gwt_user_client_ui_ListBox_ListBox__V(){
  com_google_gwt_user_client_ui_FocusWidget_$clinit__V();
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.createElement('select'));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-ListBox';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(114, 57, $intern_7, com_google_gwt_user_client_ui_ListBox_ListBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ListBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'ListBox', 114);
function com_google_gwt_user_client_ui_PotentialElement_$clinit__V(){
  com_google_gwt_user_client_ui_PotentialElement_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_PotentialElement_declareShim__V();
}

function com_google_gwt_user_client_ui_PotentialElement_$setResolver__Lcom_google_gwt_user_client_ui_PotentialElement_2Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_dom_client_Element_2(this$static, resolver){
  com_google_gwt_user_client_ui_PotentialElement_$clinit__V();
  this$static.__gwt_resolve = com_google_gwt_user_client_ui_PotentialElement_buildResolveCallback__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(resolver);
}

function com_google_gwt_user_client_ui_PotentialElement_buildResolveCallback__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_core_client_JavaScriptObject_2(resolver){
  return function(){
    this.__gwt_resolve = com_google_gwt_user_client_ui_PotentialElement_cannotResolveTwice__V;
    return resolver.resolvePotentialElement__Lcom_google_gwt_dom_client_Element_2();
  }
  ;
}

function com_google_gwt_user_client_ui_PotentialElement_cannotResolveTwice__V(){
  throw 'A PotentialElement cannot be resolved twice.';
}

function com_google_gwt_user_client_ui_PotentialElement_declareShim__V(){
  var shim = function(){
  }
  ;
  shim.prototype = {className:'', clientHeight:0, clientWidth:0, dir:'', getAttribute:function(name_0, value_0){
    return this[name_0];
  }
  , href:'', id:'', lang:'', nodeType:1, removeAttribute:function(name_0, value_0){
    this[name_0] = undefined;
  }
  , setAttribute:function(name_0, value_0){
    this[name_0] = value_0;
  }
  , src:'', style:{}, title:''};
  $wnd.GwtPotentialElementShim = shim;
}

function com_google_gwt_user_client_ui_RootPanel_$clinit__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand = new com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V;
  com_google_gwt_user_client_ui_RootPanel_rootPanels = new java_util_HashMap_HashMap__V;
  com_google_gwt_user_client_ui_RootPanel_widgetsToDetach = new java_util_HashSet_HashSet__V;
}

function com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V(elem){
  com_google_gwt_user_client_ui_ComplexPanel_ComplexPanel__V.call(this);
  com_google_gwt_user_client_ui_UIObject_$setElement__Lcom_google_gwt_user_client_ui_UIObject_2Lcom_google_gwt_user_client_Element_2V(this, (com_google_gwt_user_client_DOM_$clinit__V() , elem));
  com_google_gwt_user_client_ui_Widget_$onAttach__Lcom_google_gwt_user_client_ui_Widget_2V(this);
}

function com_google_gwt_user_client_ui_RootPanel_detachNow__Lcom_google_gwt_user_client_ui_Widget_2V(widget){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    widget.onDetach__V();
  }
   finally {
    java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, widget);
  }
}

function com_google_gwt_user_client_ui_RootPanel_detachWidgets__V(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  try {
    com_google_gwt_user_client_ui_AttachDetachException_tryCommand__Ljava_lang_Iterable_2Lcom_google_gwt_user_client_ui_AttachDetachException$Command_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand);
  }
   finally {
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach.java_util_HashSet_map);
    java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(com_google_gwt_user_client_ui_RootPanel_rootPanels);
  }
}

function com_google_gwt_user_client_ui_RootPanel_get__Ljava_lang_String_2Lcom_google_gwt_user_client_ui_RootPanel_2(){
  com_google_gwt_user_client_ui_RootPanel_$clinit__V();
  var rp;
  rp = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null), 36);
  if (rp) {
    return rp;
  }
  java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(com_google_gwt_user_client_ui_RootPanel_rootPanels) == 0 && com_google_gwt_user_client_Window_addCloseHandler__Lcom_google_gwt_event_logical_shared_CloseHandler_2Lcom_google_gwt_event_shared_HandlerRegistration_2(new com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
  rp = new com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V;
  java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_user_client_ui_RootPanel_rootPanels, null, rp);
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(com_google_gwt_user_client_ui_RootPanel_widgetsToDetach, rp);
  return rp;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(36, 99, $intern_48);
var com_google_gwt_user_client_ui_RootPanel_maybeDetachCommand, com_google_gwt_user_client_ui_RootPanel_rootPanels, com_google_gwt_user_client_ui_RootPanel_widgetsToDetach;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'RootPanel', 36);
function com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(104, 1, {}, com_google_gwt_user_client_ui_RootPanel$1_RootPanel$1__V);
_.execute__Lcom_google_gwt_user_client_ui_Widget_2V = function com_google_gwt_user_client_ui_RootPanel$1_execute__Lcom_google_gwt_user_client_ui_Widget_2V(w){
  w.isAttached__Z() && w.onDetach__V();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'RootPanel/1', 104);
function com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(105, 1, {220:1, 89:1}, com_google_gwt_user_client_ui_RootPanel$2_RootPanel$2__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'RootPanel/2', 105);
function com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V(){
  com_google_gwt_user_client_ui_RootPanel_RootPanel__Lcom_google_gwt_dom_client_Element_2V.call(this, $doc.body);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(103, 36, $intern_48, com_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_RootPanel$DefaultRootPanel__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1RootPanel$DefaultRootPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'RootPanel/DefaultRootPanel', 103);
function com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V(elem){
  com_google_gwt_user_client_ui_FocusWidget_$clinit__V();
  com_google_gwt_user_client_ui_FocusWidget_FocusWidget__Lcom_google_gwt_dom_client_Element_2V.call(this, elem);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(176, 57, $intern_7);
_.onBrowserEvent__Lcom_google_gwt_user_client_Event_2V = function com_google_gwt_user_client_ui_ValueBoxBase_onBrowserEvent__Lcom_google_gwt_user_client_Event_2V(event_0){
  var type_0;
  type_0 = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_user_client_impl_DOMImpl_$eventGetTypeInt__Lcom_google_gwt_user_client_impl_DOMImpl_2Ljava_lang_String_2I(event_0.type));
  (type_0 & 896) != 0?com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0):com_google_gwt_user_client_ui_Widget_$onBrowserEvent__Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Event_2V(this, event_0);
}
;
_.onLoad__V = function com_google_gwt_user_client_ui_ValueBoxBase_onLoad__V(){
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'ValueBoxBase', 176);
function com_google_gwt_user_client_ui_TextBoxBase_$clinit__V(){
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_FocusWidget_$clinit__V();
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(177, 176, $intern_7);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBoxBase_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'TextBoxBase', 177);
function com_google_gwt_user_client_ui_TextBox_TextBox__V(){
  var com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0;
  com_google_gwt_user_client_ui_TextBoxBase_$clinit__V();
  com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V.call(this, (com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0 = $doc.createElement('INPUT') , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0.type = 'text' , com_google_gwt_dom_client_DOMImpl_$createInputElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Document_2Ljava_lang_String_2Lcom_google_gwt_dom_client_InputElement_2_e_0));
}

function com_google_gwt_user_client_ui_TextBox_TextBox__Lcom_google_gwt_dom_client_Element_2Ljava_lang_String_2V(element){
  com_google_gwt_user_client_ui_ValueBoxBase_ValueBoxBase__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_text_shared_Renderer_2Lcom_google_gwt_text_shared_Parser_2V.call(this, (!com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughRenderer_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughRenderer_PassthroughRenderer__V) , !com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE && (com_google_gwt_text_shared_testing_PassthroughParser_INSTANCE = new com_google_gwt_text_shared_testing_PassthroughParser_PassthroughParser__V) , element));
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_UIObject_element).className = 'gwt-TextBox';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(65, 177, $intern_7, com_google_gwt_user_client_ui_TextBox_TextBox__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1TextBox_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'TextBox', 65);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV;
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT = new com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV;
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV(enum$name, enum$ordinal){
  java_lang_Enum_Enum__Ljava_lang_String_2IV.call(this, enum$name, enum$ordinal);
}

function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_$clinit__V();
  return com_google_gwt_lang_Array_stampJavaTypeInfo__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2ILjava_lang_Object_2Ljava_lang_Object_2(com_google_gwt_lang_Array_getClassLiteralForArray__Ljava_lang_Class_2ILjava_lang_Class_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit, 1), $intern_14, 34, 0, [com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT]);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(34, 52, $intern_20);
var com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_CENTER, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_JUSTIFY, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_LEFT, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_RIGHT;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_6, 'ValueBoxBase/TextAlignment', 34, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_values___3Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'CENTER', 0);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(178, 34, $intern_20, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_ValueBoxBase$TextAlignment$1__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$1_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_6, 'ValueBoxBase/TextAlignment/1', 178, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'JUSTIFY', 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(179, 34, $intern_20, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_ValueBoxBase$TextAlignment$2__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$2_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_6, 'ValueBoxBase/TextAlignment/2', 179, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'LEFT', 2);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(180, 34, $intern_20, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_ValueBoxBase$TextAlignment$3__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$3_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_6, 'ValueBoxBase/TextAlignment/3', 180, null);
function com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV(){
  com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_ValueBoxBase$TextAlignment__Ljava_lang_String_2IV.call(this, 'RIGHT', 3);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(181, 34, $intern_20, com_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_ValueBoxBase$TextAlignment$4__Ljava_lang_String_2IV);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1ValueBoxBase$TextAlignment$4_12_1classLit = java_lang_Class_createForEnum__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2($intern_6, 'ValueBoxBase/TextAlignment/4', 181, null);
function com_google_gwt_user_client_ui_VerticalPanel_$add__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var td, tr, com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0;
  tr = (com_google_gwt_user_client_DOM_$clinit__V() , $doc.createElement('tr'));
  td = (com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0 = $doc.createElement('td') , com_google_gwt_user_client_ui_CellPanel_$setCellHorizontalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_horzAlign) , com_google_gwt_user_client_ui_CellPanel_$setCellVerticalAlignment__Lcom_google_gwt_user_client_ui_CellPanel_2Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2V(com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0, this$static.com_google_gwt_user_client_ui_VerticalPanel_vertAlign) , com_google_gwt_user_client_ui_VerticalPanel_$createAlignedTd__Lcom_google_gwt_user_client_ui_VerticalPanel_2Lcom_google_gwt_dom_client_Element_2_td_0);
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(tr, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(td));
  com_google_gwt_dom_client_Node_$appendChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this$static.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_user_client_DOM_resolve__Lcom_google_gwt_dom_client_Element_2Lcom_google_gwt_dom_client_Element_2(tr));
  com_google_gwt_user_client_ui_ComplexPanel_$add__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Lcom_google_gwt_user_client_Element_2V(this$static, w, td);
}

function com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V(){
  com_google_gwt_user_client_ui_CellPanel_CellPanel__V.call(this);
  this.com_google_gwt_user_client_ui_VerticalPanel_horzAlign = (com_google_gwt_user_client_ui_HasHorizontalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasHorizontalAlignment_ALIGN_1DEFAULT);
  this.com_google_gwt_user_client_ui_VerticalPanel_vertAlign = (com_google_gwt_user_client_ui_HasVerticalAlignment_$clinit__V() , com_google_gwt_user_client_ui_HasVerticalAlignment_ALIGN_1TOP);
  (com_google_gwt_user_client_DOM_$clinit__V() , this.com_google_gwt_user_client_ui_CellPanel_table)[$intern_9] = '0';
  this.com_google_gwt_user_client_ui_CellPanel_table[$intern_47] = '0';
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(25, 73, $intern_44, com_google_gwt_user_client_ui_VerticalPanel_VerticalPanel__V);
_.remove__Lcom_google_gwt_user_client_ui_Widget_2Z = function com_google_gwt_user_client_ui_VerticalPanel_remove__Lcom_google_gwt_user_client_ui_Widget_2Z(w){
  var removed, td;
  td = (com_google_gwt_user_client_DOM_$clinit__V() , com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(w.com_google_gwt_user_client_ui_UIObject_element));
  removed = com_google_gwt_user_client_ui_ComplexPanel_$remove__Lcom_google_gwt_user_client_ui_ComplexPanel_2Lcom_google_gwt_user_client_ui_Widget_2Z(this, w);
  removed && com_google_gwt_dom_client_Node_$removeChild__Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Node_2(this.com_google_gwt_user_client_ui_CellPanel_body, com_google_gwt_dom_client_DOMImpl_$getParentElement__Lcom_google_gwt_dom_client_DOMImpl_2Lcom_google_gwt_dom_client_Node_2Lcom_google_gwt_dom_client_Element_2(td));
  return removed;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1VerticalPanel_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'VerticalPanel', 25);
function com_google_gwt_user_client_ui_WidgetCollection_$add__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, this$static.com_google_gwt_user_client_ui_WidgetCollection_size);
}

function com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w){
  var i;
  for (i = 0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    if (this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] == w) {
      return i;
    }
  }
  return -1;
}

function com_google_gwt_user_client_ui_WidgetCollection_$insert__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2IV(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection_size == this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length) {
    newArray = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_14, 5, this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.com_google_gwt_user_client_ui_WidgetCollection_array.length; ++i0) {
      newArray[i0] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i0];
    }
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array = newArray;
  }
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = this$static.com_google_gwt_user_client_ui_WidgetCollection_size - 1; i > beforeIndex; --i) {
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i - 1];
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array[beforeIndex] = w;
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V);
  }
  --this$static.com_google_gwt_user_client_ui_WidgetCollection_size;
  for (i = index_0; i < this$static.com_google_gwt_user_client_ui_WidgetCollection_size; ++i) {
    this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i] = this$static.com_google_gwt_user_client_ui_WidgetCollection_array[i + 1];
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection_size] = null;
}

function com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2V(this$static, w){
  var index_0;
  index_0 = com_google_gwt_user_client_ui_WidgetCollection_$indexOf__Lcom_google_gwt_user_client_ui_WidgetCollection_2Lcom_google_gwt_user_client_ui_Widget_2I(this$static, w);
  if (index_0 == -1) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  com_google_gwt_user_client_ui_WidgetCollection_$remove__Lcom_google_gwt_user_client_ui_WidgetCollection_2IV(this$static, index_0);
}

function com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V(){
  this.com_google_gwt_user_client_ui_WidgetCollection_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1Widget_12_1classLit, $intern_14, 5, 4, 0, 1);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(135, 1, {}, com_google_gwt_user_client_ui_WidgetCollection_WidgetCollection__Lcom_google_gwt_user_client_ui_HasWidgets_2V);
_.iterator__Ljava_util_Iterator_2 = function com_google_gwt_user_client_ui_WidgetCollection_iterator__Ljava_util_Iterator_2(){
  return new com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this);
}
;
_.com_google_gwt_user_client_ui_WidgetCollection_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'WidgetCollection', 135);
function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this$static){
  if (this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index >= this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
  this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget = this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_array[this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index];
  ++this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index;
  return this$static.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_currentWidget;
}

function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V(this$0){
  this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(78, 1, {}, com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_WidgetCollection$WidgetIterator__Lcom_google_gwt_user_client_ui_WidgetCollection_2V);
_.next__Ljava_lang_Object_2 = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_next__Ljava_lang_Object_2(){
  return com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_$next__Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2Lcom_google_gwt_user_client_ui_Widget_2(this);
}
;
_.hasNext__Z = function com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_hasNext__Z(){
  return this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index < this.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_this$01.com_google_gwt_user_client_ui_WidgetCollection_size;
}
;
_.com_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_index = 0;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1WidgetCollection$WidgetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_6, 'WidgetCollection/WidgetIterator', 78);
function com_google_gwt_user_client_ui_impl_FocusImpl_$clinit__V(){
  com_google_gwt_user_client_ui_impl_FocusImpl_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  com_google_gwt_user_client_ui_impl_FocusImpl_implPanel = new com_google_gwt_user_client_ui_impl_FocusImplStandard_FocusImplStandard__V;
  com_google_gwt_user_client_ui_impl_FocusImpl_implPanel?new com_google_gwt_user_client_ui_impl_FocusImpl_FocusImpl__V:com_google_gwt_user_client_ui_impl_FocusImpl_implPanel;
}

function com_google_gwt_user_client_ui_impl_FocusImpl_FocusImpl__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(161, 1, {}, com_google_gwt_user_client_ui_impl_FocusImpl_FocusImpl__V);
var com_google_gwt_user_client_ui_impl_FocusImpl_implPanel;
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1impl_1FocusImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'FocusImpl', 161);
function com_google_gwt_user_client_ui_impl_FocusImplStandard_FocusImplStandard__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(162, 161, {}, com_google_gwt_user_client_ui_impl_FocusImplStandard_FocusImplStandard__V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1user_1client_1ui_1impl_1FocusImplStandard_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_49, 'FocusImplStandard', 162);
function com_google_gwt_useragent_client_UserAgentAsserter_assertCompileTimeUserAgent__V(){
  var runtimeValue;
  runtimeValue = com_google_gwt_useragent_client_UserAgentImplGecko1_18_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2Ljava_lang_String_2();
  if (!java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z($intern_50, runtimeValue)) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue));
  }
}

function java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V(message, cause){
  java_lang_Throwable_Throwable__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, message, cause);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(51, 4, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Error_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Error', 51);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(9, 51, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AssertionError', 9);
function com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V(runtimeValue){
  java_lang_Error_Error__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, $intern_51 + runtimeValue + $intern_52 + $intern_53 == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2($intern_51 + runtimeValue + $intern_52 + $intern_53), com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z($intern_51 + runtimeValue + $intern_52 + $intern_53, 4)?com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2($intern_51 + runtimeValue + $intern_52 + $intern_53, 4):null);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(91, 9, $intern_17, com_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_UserAgentAsserter$UserAgentAssertionError__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1gwt_1useragent_1client_1UserAgentAsserter$UserAgentAssertionError_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 91);
function com_google_gwt_useragent_client_UserAgentImplGecko1_18_$getRuntimeValue__Lcom_google_gwt_useragent_client_UserAgentImplGecko1_18_2Ljava_lang_String_2(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return $intern_50;
  return 'unknown';
}

function com_google_gwt_xhr_client_XMLHttpRequest_$clearOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(this$static){
  this$static.onreadystatechange = function(){
  }
  ;
}

function com_google_gwt_xhr_client_XMLHttpRequest_$open__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, httpMethod, url_0){
  this$static.open(httpMethod, url_0, true);
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setOnReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Lcom_google_gwt_xhr_client_ReadyStateChangeHandler_2V(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange__Lcom_google_gwt_xhr_client_XMLHttpRequest_2V(_this);
  }
  );
}

function com_google_gwt_xhr_client_XMLHttpRequest_$setRequestHeader__Lcom_google_gwt_xhr_client_XMLHttpRequest_2Ljava_lang_String_2Ljava_lang_String_2V(this$static, header, value_0){
  this$static.setRequestHeader(header, value_0);
}

function com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(133, 1, {}, com_google_web_bindery_event_shared_SimpleEventBus$1_SimpleEventBus$1__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'SimpleEventBus/1', 133);
function com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V(this$0, val$type, val$handler){
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_this$01 = this$0;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$type2 = val$type;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$source3 = null;
  this.com_google_web_bindery_event_shared_SimpleEventBus$2_val$handler4 = val$handler;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(134, 1, {221:1}, com_google_web_bindery_event_shared_SimpleEventBus$2_SimpleEventBus$2__Lcom_google_web_bindery_event_shared_SimpleEventBus_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lcom_1google_1web_1bindery_1event_1shared_1SimpleEventBus$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_22, 'SimpleEventBus/2', 134);
function java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V(string){
  this.java_lang_AbstractStringBuilder_string = string;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(95, 1, {92:1});
_.toString__Ljava_lang_String_2 = function java_lang_AbstractStringBuilder_toString__Ljava_lang_String_2(){
  return this.java_lang_AbstractStringBuilder_string;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1AbstractStringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'AbstractStringBuilder', 95);
function java_lang_ArrayStoreException_ArrayStoreException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(108, 8, $intern_17, java_lang_ArrayStoreException_ArrayStoreException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ArrayStoreException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ArrayStoreException', 108);
function java_lang_Boolean_$clinit__V(){
  java_lang_Boolean_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_lang_Boolean_FALSE = (java_lang_Boolean_$clinit__V() , false);
}

com_google_gwt_lang_Cast_booleanCastMap = $intern_20;
var java_lang_Boolean_FALSE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Boolean_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Boolean', 196);
function java_lang_ClassCastException_ClassCastException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(94, 8, $intern_17, java_lang_ClassCastException_ClassCastException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1ClassCastException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'ClassCastException', 94);
function java_lang_Number__1_1parseAndValidateDouble__Ljava_lang_String_2D(s){
  java_lang_Number_floatRegex == null && (java_lang_Number_floatRegex = /^\s*[+-]?(NaN|Infinity|((\d+\.?\d*)|(\.\d+))([eE][+-]?\d+)?[dDfF]?)\s*$/);
  if (!java_lang_Number_floatRegex.test(s)) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V('For input string: "' + s + '"'));
  }
  return parseFloat(s);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(197, 1, $intern_14);
var java_lang_Number_floatRegex;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Number_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Number', 197);
com_google_gwt_lang_Cast_doubleCastMap = $intern_20;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Double_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Double', 198);
function java_lang_Float_Float__FV(value_0){
  this.java_lang_Float_value = value_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(28, 197, {3:1, 10:1, 28:1}, java_lang_Float_Float__FV);
_.equals__Ljava_lang_Object_2Z = function java_lang_Float_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 28) && com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 28).java_lang_Float_value == this.java_lang_Float_value;
}
;
_.hashCode__I = function java_lang_Float_hashCode__I(){
  return com_google_gwt_lang_Cast_round_1int__DI(this.java_lang_Float_value);
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Float_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Float_value;
}
;
_.java_lang_Float_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Float_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Float', 28);
function java_lang_IllegalArgumentException_IllegalArgumentException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(20, 8, $intern_17, java_lang_IllegalArgumentException_IllegalArgumentException__V, java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalArgumentException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalArgumentException', 20);
function java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V(s){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, s);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(21, 8, $intern_17, java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IllegalStateException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IllegalStateException', 21);
function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(13, 8, $intern_17, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__V, java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1IndexOutOfBoundsException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'IndexOutOfBoundsException', 13);
function java_lang_Integer_Integer__IV(value_0){
  this.java_lang_Integer_value = value_0;
}

function java_lang_Integer_valueOf__ILjava_lang_Integer_2(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = (java_lang_Integer$BoxedValues_$clinit__V() , java_lang_Integer$BoxedValues_boxedValues)[rebase];
    !result && (result = java_lang_Integer$BoxedValues_boxedValues[rebase] = new java_lang_Integer_Integer__IV(i));
    return result;
  }
  return new java_lang_Integer_Integer__IV(i);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(19, 197, {3:1, 10:1, 19:1}, java_lang_Integer_Integer__IV);
_.equals__Ljava_lang_Object_2Z = function java_lang_Integer_equals__Ljava_lang_Object_2Z(o){
  return com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 19) && com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 19).java_lang_Integer_value == this.java_lang_Integer_value;
}
;
_.hashCode__I = function java_lang_Integer_hashCode__I(){
  return this.java_lang_Integer_value;
}
;
_.toString__Ljava_lang_String_2 = function java_lang_Integer_toString__Ljava_lang_String_2(){
  return '' + this.java_lang_Integer_value;
}
;
_.java_lang_Integer_value = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'Integer', 19);
function java_lang_Integer$BoxedValues_$clinit__V(){
  java_lang_Integer$BoxedValues_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_lang_Integer$BoxedValues_boxedValues = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Integer_12_1classLit, $intern_14, 19, 256, 0, 1);
}

var java_lang_Integer$BoxedValues_boxedValues;
function java_lang_NullPointerException_NullPointerException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(11, 54, $intern_17, java_lang_NullPointerException_NullPointerException__V, java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V);
_.package_private$java_lang$createError__Ljava_lang_String_2Ljava_lang_Object_2 = function java_lang_NullPointerException_createError__Ljava_lang_String_2Ljava_lang_Object_2(msg){
  return new $wnd.TypeError(msg);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NullPointerException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NullPointerException', 11);
function java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V(message){
  java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(53, 20, {3:1, 53:1, 4:1}, java_lang_NumberFormatException_NumberFormatException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1NumberFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'NumberFormatException', 53);
function java_lang_String_$charAt__Ljava_lang_String_2IC(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other){
  return javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static) , this$static === other;
}

function java_lang_String_$equalsIgnoreCase__Ljava_lang_String_2Ljava_lang_String_2Z(this$static, other){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(this$static);
  if (other == null) {
    return false;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static, other)) {
    return true;
  }
  return this$static.length == other.length && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(this$static.toLowerCase(), other.toLowerCase());
}

function java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(this$static, str){
  return this$static.indexOf(str);
}

function java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(this$static, endIndex){
  return this$static.substr(0, endIndex);
}

function java_lang_String_$trim__Ljava_lang_String_2Ljava_lang_String_2(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

com_google_gwt_lang_Cast_stringCastMap = {3:1, 92:1, 10:1, 2:1};
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1String_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'String', 2);
function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_Object_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static, x_0){
  this$static.java_lang_AbstractStringBuilder_string += '' + x_0;
  return this$static;
}

function java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(s){
  java_lang_AbstractStringBuilder_AbstractStringBuilder__Ljava_lang_String_2V.call(this, (javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(s) , s));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(35, 95, {92:1}, java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1StringBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'StringBuilder', 35);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(239, 1, {});
function java_lang_UnsupportedOperationException_UnsupportedOperationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

function java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(55, 8, $intern_17, java_lang_UnsupportedOperationException_UnsupportedOperationException__V, java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1UnsupportedOperationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_2, 'UnsupportedOperationException', 55);
function java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this$static, o){
  var e, iter;
  for (iter = this$static.iterator__Ljava_util_Iterator_2(); iter.hasNext__Z();) {
    e = iter.next__Ljava_lang_Object_2();
    if (com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(o) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(e) || o != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, e)) {
      return true;
    }
  }
  return false;
}

function java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this$static, c){
  var e, e$iterator;
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(c);
  for (e$iterator = c.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    if (!this$static.contains__Ljava_lang_Object_2Z(e)) {
      return false;
    }
  }
  return true;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(204, 1, {});
_.add__Ljava_lang_Object_2Z = function java_util_AbstractCollection_add__Ljava_lang_Object_2Z(o){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this collection'));
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractCollection_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractCollection_$advanceToFind__Ljava_util_AbstractCollection_2Ljava_lang_Object_2ZZ(this, o);
}
;
_.isEmpty__Z = function java_util_AbstractCollection_isEmpty__Z(){
  return this.size__I() == 0;
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractCollection_toString__Ljava_lang_String_2(){
  var e, e$iterator, joiner;
  joiner = new java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V('[', ']');
  for (e$iterator = this.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(joiner, e === this?'(this Collection)':e == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(e));
  }
  return !joiner.java_util_StringJoiner_builder?joiner.java_util_StringJoiner_emptyValue:joiner.java_util_StringJoiner_suffix.length == 0?joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + joiner.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractCollection_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractCollection', 204);
function java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey__Ljava_lang_Object_2();
  value_0 = entry.getValue__Ljava_lang_Object_2();
  ourValue = com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?key == null?java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null)):java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key):java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
  if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value_0) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(ourValue) || value_0 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key))) {
    return false;
  }
  return true;
}

function java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this$static, o){
  return o === this$static?'(this Map)':o == null?$intern_19:com_google_gwt_lang_Runtime_toString__Ljava_lang_Object_2Ljava_lang_String_2(o);
}

function java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(entry){
  return !entry?null:entry.getValue__Ljava_lang_Object_2();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(203, 1, {49:1});
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap_equals__Ljava_lang_Object_2Z(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(obj, 17)) {
    return false;
  }
  otherMap = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(obj, 49);
  if (this.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size != otherMap.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + otherMap.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size) {
    return false;
  }
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(otherMap)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    if (!java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractMap_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this));
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMap_toString__Ljava_lang_String_2(){
  var entry, entry$iterator, joiner;
  joiner = new java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V('{', '}');
  for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
    entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
    java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(joiner, java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getKey__Ljava_lang_Object_2()) + '=' + java_util_AbstractMap_$toString__Ljava_util_AbstractMap_2Ljava_lang_Object_2Ljava_lang_String_2(this, entry.getValue__Ljava_lang_Object_2()));
  }
  return !joiner.java_util_StringJoiner_builder?joiner.java_util_StringJoiner_emptyValue:joiner.java_util_StringJoiner_suffix.length == 0?joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:joiner.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + joiner.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractMap', 203);
function java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key):!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$get__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return java_util_AbstractMap_getEntryValueOrNull__Ljava_util_Map$Entry_2Ljava_lang_Object_2(java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, key));
}

function java_util_AbstractHashMap_$hasStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Z(this$static, key){
  return key == null?!!java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static.java_util_AbstractHashMap_stringMap, key);
}

function java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0):java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key, value_0);
}

function java_util_AbstractHashMap_$putStringValue__Ljava_util_AbstractHashMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  return key == null?java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null, value_0):java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key, value_0);
}

function java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  return com_google_gwt_lang_Cast_instanceOfString__Ljava_lang_Object_2Z(key)?key == null?java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, null):java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_stringMap, key):java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap_hashCodeMap, key);
}

function java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this$static){
  var modCount;
  this$static.java_util_AbstractHashMap_hashCodeMap = new java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(this$static);
  this$static.java_util_AbstractHashMap_stringMap = new java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(this$static);
  modCount = this$static[$intern_55] | 0;
  this$static[$intern_55] = modCount + 1;
}

function java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this$static){
  return this$static.java_util_AbstractHashMap_hashCodeMap.java_util_InternalHashCodeMap_size + this$static.java_util_AbstractHashMap_stringMap.java_util_InternalStringMap_size;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(110, 203, {49:1});
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractHashMap', 110);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(205, 204, {50:1});
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractSet_equals__Ljava_lang_Object_2Z(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 50)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 50);
  if (other.size__I() != this.size__I()) {
    return false;
  }
  return java_util_AbstractCollection_$containsAll__Ljava_util_AbstractCollection_2Ljava_util_Collection_2Z(this, other);
}
;
_.hashCode__I = function java_util_AbstractSet_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_lang_Iterable_2I(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractSet', 205);
function java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this$static, o){
  if (com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 18)) {
    return java_util_AbstractMap_$containsEntry__Ljava_util_AbstractMap_2Ljava_util_Map$Entry_2Z(this$static.java_util_AbstractHashMap$EntrySet_this$01, com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 18));
  }
  return false;
}

function java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this$0){
  this.java_util_AbstractHashMap$EntrySet_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(23, 205, {50:1}, java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractHashMap$EntrySet_contains__Ljava_lang_Object_2Z(o){
  return java_util_AbstractHashMap$EntrySet_$contains__Ljava_util_AbstractHashMap$EntrySet_2Ljava_lang_Object_2Z(this, o);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractHashMap$EntrySet_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
_.size__I = function java_util_AbstractHashMap$EntrySet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractHashMap$EntrySet_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractHashMap/EntrySet', 23);
function java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static){
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z()) {
    return true;
  }
  if (this$static.java_util_AbstractHashMap$EntrySetIterator_current != this$static.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries) {
    return false;
  }
  this$static.java_util_AbstractHashMap$EntrySetIterator_current = new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_hashCodeMap);
  return this$static.java_util_AbstractHashMap$EntrySetIterator_current.hasNext__Z();
}

function java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this$static){
  var rv;
  java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(this$static.java_util_AbstractHashMap$EntrySetIterator_this$01, this$static);
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext);
  rv = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(this$static.java_util_AbstractHashMap$EntrySetIterator_current.next__Ljava_lang_Object_2(), 18);
  this$static.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this$static);
  return rv;
}

function java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V(this$0){
  var modCount;
  this.java_util_AbstractHashMap$EntrySetIterator_this$01 = this$0;
  this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries = new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this.java_util_AbstractHashMap$EntrySetIterator_this$01.java_util_AbstractHashMap_stringMap);
  this.java_util_AbstractHashMap$EntrySetIterator_current = this.java_util_AbstractHashMap$EntrySetIterator_stringMapEntries;
  this.java_util_AbstractHashMap$EntrySetIterator_hasNext = java_util_AbstractHashMap$EntrySetIterator_$computeHasNext__Ljava_util_AbstractHashMap$EntrySetIterator_2Z(this);
  modCount = this$0[$intern_55];
  this[$intern_55] = modCount;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(24, 1, {}, java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_AbstractHashMap$EntrySetIterator_next__Ljava_lang_Object_2(){
  return java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this);
}
;
_.hasNext__Z = function java_util_AbstractHashMap$EntrySetIterator_hasNext__Z(){
  return this.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.java_util_AbstractHashMap$EntrySetIterator_hasNext = false;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractHashMap$EntrySetIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractHashMap/EntrySetIterator', 24);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(207, 204, {26:1});
_.add__ILjava_lang_Object_2V = function java_util_AbstractList_add__ILjava_lang_Object_2V(index_0, element){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_UnsupportedOperationException_UnsupportedOperationException__Ljava_lang_String_2V('Add not supported on this list'));
}
;
_.add__Ljava_lang_Object_2Z = function java_util_AbstractList_add__Ljava_lang_Object_2Z(obj){
  this.add__ILjava_lang_Object_2V(this.size__I(), obj);
  return true;
}
;
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractList_equals__Ljava_lang_Object_2Z(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(o, 26)) {
    return false;
  }
  other = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(o, 26);
  if (this.size__I() != other.size__I()) {
    return false;
  }
  iterOther = other.iterator__Ljava_util_Iterator_2();
  for (elem$iterator = this.iterator__Ljava_util_Iterator_2(); elem$iterator.hasNext__Z();) {
    elem = elem$iterator.next__Ljava_lang_Object_2();
    elemOther = iterOther.next__Ljava_lang_Object_2();
    if (!(com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elem) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(elemOther) || elem != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode__I = function java_util_AbstractList_hashCode__I(){
  return java_util_Collections_hashCode__Ljava_util_List_2I(this);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractList_iterator__Ljava_util_Iterator_2(){
  return new java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this);
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_AbstractList_listIterator__Ljava_util_ListIterator_2(){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, 0);
}
;
_.listIterator__ILjava_util_ListIterator_2 = function java_util_AbstractList_listIterator__ILjava_util_ListIterator_2(from){
  return new java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this, from);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractList', 207);
function java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V(this$0){
  this.java_util_AbstractList$IteratorImpl_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(74, 1, {}, java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V);
_.hasNext__Z = function java_util_AbstractList$IteratorImpl_hasNext__Z(){
  return this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I();
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractList$IteratorImpl_next__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i < this.java_util_AbstractList$IteratorImpl_this$01.size__I());
  return this.java_util_AbstractList$IteratorImpl_this$01.get__ILjava_lang_Object_2(this.java_util_AbstractList$IteratorImpl_i++);
}
;
_.java_util_AbstractList$IteratorImpl_i = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$IteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractList/IteratorImpl', 74);
function java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV(this$0, start_0){
  this.java_util_AbstractList$ListIteratorImpl_this$01 = this$0;
  java_util_AbstractList$IteratorImpl_AbstractList$IteratorImpl__Ljava_util_AbstractList_2V.call(this, this$0);
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(start_0, this$0.size__I());
  this.java_util_AbstractList$IteratorImpl_i = start_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(75, 74, {}, java_util_AbstractList$ListIteratorImpl_AbstractList$ListIteratorImpl__Ljava_util_AbstractList_2IV);
_.hasPrevious__Z = function java_util_AbstractList$ListIteratorImpl_hasPrevious__Z(){
  return this.java_util_AbstractList$IteratorImpl_i > 0;
}
;
_.previous__Ljava_lang_Object_2 = function java_util_AbstractList$ListIteratorImpl_previous__Ljava_lang_Object_2(){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this.java_util_AbstractList$IteratorImpl_i > 0);
  return this.java_util_AbstractList$ListIteratorImpl_this$01.get__ILjava_lang_Object_2(--this.java_util_AbstractList$IteratorImpl_i);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractList$ListIteratorImpl_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractList/ListIteratorImpl', 75);
function java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this$0){
  this.java_util_AbstractMap$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(113, 205, {50:1}, java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V);
_.contains__Ljava_lang_Object_2Z = function java_util_AbstractMap$1_contains__Ljava_lang_Object_2Z(key){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$1_this$01, key);
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_AbstractMap$1_iterator__Ljava_util_Iterator_2(){
  var java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0;
  return java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0 = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(this.java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(java_util_AbstractMap$1_$iterator__Ljava_util_AbstractMap$1_2Ljava_util_Iterator_2_outerIter_0);
}
;
_.size__I = function java_util_AbstractMap$1_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_AbstractMap$1_this$01);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractMap/1', 113);
function java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(val$outerIter){
  this.java_util_AbstractMap$1$1_val$outerIter2 = val$outerIter;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(71, 1, {}, java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V);
_.hasNext__Z = function java_util_AbstractMap$1$1_hasNext__Z(){
  return this.java_util_AbstractMap$1$1_val$outerIter2.java_util_AbstractHashMap$EntrySetIterator_hasNext;
}
;
_.next__Ljava_lang_Object_2 = function java_util_AbstractMap$1$1_next__Ljava_lang_Object_2(){
  var entry;
  entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(this.java_util_AbstractMap$1$1_val$outerIter2);
  return entry.getKey__Ljava_lang_Object_2();
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$1$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractMap/1/1', 71);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(111, 1, $intern_56);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMap$AbstractEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 18)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 18);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_key, entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_AbstractMap$AbstractEntry_value, entry.getValue__Ljava_lang_Object_2());
}
;
_.getKey__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getKey__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_key;
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_getValue__Ljava_lang_Object_2(){
  return this.java_util_AbstractMap$AbstractEntry_value;
}
;
_.hashCode__I = function java_util_AbstractMap$AbstractEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_key) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_AbstractMap$AbstractEntry_value);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_AbstractMap$AbstractEntry_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0){
  var oldValue;
  oldValue = this.java_util_AbstractMap$AbstractEntry_value;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
  return oldValue;
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMap$AbstractEntry_toString__Ljava_lang_String_2(){
  return this.java_util_AbstractMap$AbstractEntry_key + '=' + this.java_util_AbstractMap$AbstractEntry_value;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$AbstractEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractMap/AbstractEntry', 111);
function java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0){
  this.java_util_AbstractMap$AbstractEntry_key = key;
  this.java_util_AbstractMap$AbstractEntry_value = value_0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(112, 111, $intern_56, java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMap$SimpleEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractMap/SimpleEntry', 112);
com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(212, 1, $intern_56);
_.equals__Ljava_lang_Object_2Z = function java_util_AbstractMapEntry_equals__Ljava_lang_Object_2Z(other){
  var entry;
  if (!com_google_gwt_lang_Cast_instanceOf__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Z(other, 18)) {
    return false;
  }
  entry = com_google_gwt_lang_Cast_castTo__Ljava_lang_Object_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Object_2(other, 18);
  return java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(this.java_util_InternalStringMap$2_val$entry2.value[0], entry.getKey__Ljava_lang_Object_2()) && java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this), entry.getValue__Ljava_lang_Object_2());
}
;
_.hashCode__I = function java_util_AbstractMapEntry_hashCode__I(){
  return java_util_Objects_hashCode__Ljava_lang_Object_2I(this.java_util_InternalStringMap$2_val$entry2.value[0]) ^ java_util_Objects_hashCode__Ljava_lang_Object_2I(java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this));
}
;
_.toString__Ljava_lang_String_2 = function java_util_AbstractMapEntry_toString__Ljava_lang_String_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0] + '=' + java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1AbstractMapEntry_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'AbstractMapEntry', 212);
function java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this$static){
  this$static.java_util_ArrayList_array = com_google_gwt_lang_Array_initUnidimensionalArray__Ljava_lang_Class_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2IIILjava_lang_Object_2(com_google_gwt_lang_ClassLiteralHolder_Ljava_1lang_1Object_12_1classLit, $intern_14, 1, 0, 5, 1);
}

function java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this$static, o){
  this$static.java_util_ArrayList_array[this$static.java_util_ArrayList_array.length] = o;
  return true;
}

function java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this$static, index_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length);
  return this$static.java_util_ArrayList_array[index_0];
}

function java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this$static, o, index_0){
  for (; index_0 < this$static.java_util_ArrayList_array.length; ++index_0) {
    if (java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(o, this$static.java_util_ArrayList_array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function java_util_ArrayList_$set__Ljava_util_ArrayList_2ILjava_lang_Object_2Ljava_lang_Object_2(this$static, index_0, o){
  var previous;
  previous = (javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, this$static.java_util_ArrayList_array.length) , this$static.java_util_ArrayList_array[index_0]);
  this$static.java_util_ArrayList_array[index_0] = o;
  return previous;
}

function java_util_ArrayList_ArrayList__V(){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
}

function java_util_ArrayList_ArrayList__IV(initialCapacity){
  java_util_ArrayList_$$init__Ljava_util_ArrayList_2V(this);
  javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(initialCapacity >= 0, 'Initial capacity must not be negative');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(31, 207, {3:1, 26:1}, java_util_ArrayList_ArrayList__V, java_util_ArrayList_ArrayList__IV);
_.add__ILjava_lang_Object_2V = function java_util_ArrayList_add__ILjava_lang_Object_2V(index_0, o){
  javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, this.java_util_ArrayList_array.length);
  javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(this.java_util_ArrayList_array, index_0, o);
}
;
_.add__Ljava_lang_Object_2Z = function java_util_ArrayList_add__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$add__Ljava_util_ArrayList_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_ArrayList_contains__Ljava_lang_Object_2Z(o){
  return java_util_ArrayList_$indexOf__Ljava_util_ArrayList_2Ljava_lang_Object_2II(this, o, 0) != -1;
}
;
_.get__ILjava_lang_Object_2 = function java_util_ArrayList_get__ILjava_lang_Object_2(index_0){
  return java_util_ArrayList_$get__Ljava_util_ArrayList_2ILjava_lang_Object_2(this, index_0);
}
;
_.isEmpty__Z = function java_util_ArrayList_isEmpty__Z(){
  return this.java_util_ArrayList_array.length == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_ArrayList_iterator__Ljava_util_Iterator_2(){
  return new java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this);
}
;
_.size__I = function java_util_ArrayList_size__I(){
  return this.java_util_ArrayList_array.length;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'ArrayList', 31);
function java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(this$static){
  javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(this$static.java_util_ArrayList$1_i < this$static.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length);
  this$static.java_util_ArrayList$1_last = this$static.java_util_ArrayList$1_i++;
  return this$static.java_util_ArrayList$1_this$01.java_util_ArrayList_array[this$static.java_util_ArrayList$1_last];
}

function java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V(this$0){
  this.java_util_ArrayList$1_this$01 = this$0;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(59, 1, {}, java_util_ArrayList$1_ArrayList$1__Ljava_util_ArrayList_2V);
_.hasNext__Z = function java_util_ArrayList$1_hasNext__Z(){
  return this.java_util_ArrayList$1_i < this.java_util_ArrayList$1_this$01.java_util_ArrayList_array.length;
}
;
_.next__Ljava_lang_Object_2 = function java_util_ArrayList$1_next__Ljava_lang_Object_2(){
  return java_util_ArrayList$1_$next__Ljava_util_ArrayList$1_2Ljava_lang_Object_2(this);
}
;
_.java_util_ArrayList$1_i = 0;
_.java_util_ArrayList$1_last = -1;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ArrayList$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'ArrayList/1', 59);
function java_util_Collections_$clinit__V(){
  java_util_Collections_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Collections_EMPTY_1LIST = new java_util_Collections$EmptyList_Collections$EmptyList__V;
}

function java_util_Collections_hashCode__Ljava_lang_Iterable_2I(collection){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function java_util_Collections_hashCode__Ljava_util_List_2I(list){
  java_util_Collections_$clinit__V();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator__Ljava_util_Iterator_2(); e$iterator.hasNext__Z();) {
    e = e$iterator.next__Ljava_lang_Object_2();
    hashCode = 31 * hashCode + (e != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

var java_util_Collections_EMPTY_1LIST;
function java_util_Collections$EmptyList_Collections$EmptyList__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(137, 207, {3:1, 26:1}, java_util_Collections$EmptyList_Collections$EmptyList__V);
_.contains__Ljava_lang_Object_2Z = function java_util_Collections$EmptyList_contains__Ljava_lang_Object_2Z(object){
  return false;
}
;
_.get__ILjava_lang_Object_2 = function java_util_Collections$EmptyList_get__ILjava_lang_Object_2(location_0){
  javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(location_0, 0);
  return null;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_Collections$EmptyList_iterator__Ljava_util_Iterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.listIterator__Ljava_util_ListIterator_2 = function java_util_Collections$EmptyList_listIterator__Ljava_util_ListIterator_2(){
  return java_util_Collections_$clinit__V() , java_util_Collections$EmptyListIterator_$clinit__V() , java_util_Collections$EmptyListIterator_INSTANCE;
}
;
_.size__I = function java_util_Collections$EmptyList_size__I(){
  return 0;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyList_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'Collections/EmptyList', 137);
function java_util_Collections$EmptyListIterator_$clinit__V(){
  java_util_Collections$EmptyListIterator_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_Collections$EmptyListIterator_INSTANCE = new java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V;
}

function java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(138, 1, {}, java_util_Collections$EmptyListIterator_Collections$EmptyListIterator__V);
_.hasNext__Z = function java_util_Collections$EmptyListIterator_hasNext__Z(){
  return false;
}
;
_.hasPrevious__Z = function java_util_Collections$EmptyListIterator_hasPrevious__Z(){
  return false;
}
;
_.next__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_next__Ljava_lang_Object_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
}
;
_.previous__Ljava_lang_Object_2 = function java_util_Collections$EmptyListIterator_previous__Ljava_lang_Object_2(){
  throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
}
;
var java_util_Collections$EmptyListIterator_INSTANCE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1Collections$EmptyListIterator_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'Collections/EmptyListIterator', 138);
function java_util_ConcurrentModificationDetector_checkStructuralChange__Ljava_lang_Object_2Ljava_util_Iterator_2V(host, iterator){
  if (iterator[$intern_55] != host[$intern_55]) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_ConcurrentModificationException_ConcurrentModificationException__V);
  }
}

function java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(map_0){
  var modCount;
  modCount = map_0[$intern_55] | 0;
  map_0[$intern_55] = modCount + 1;
}

function java_util_ConcurrentModificationException_ConcurrentModificationException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(160, 8, $intern_17, java_util_ConcurrentModificationException_ConcurrentModificationException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1ConcurrentModificationException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'ConcurrentModificationException', 160);
function java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value1) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(value2) || value1 != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(value1, value2);
}

function java_util_HashMap_HashMap__V(){
  java_util_AbstractHashMap_$reset__Ljava_util_AbstractHashMap_2V(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(17, 110, {3:1, 17:1, 49:1}, java_util_HashMap_HashMap__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'HashMap', 17);
function java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  var old;
  old = java_util_AbstractHashMap_$put__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o, this$static);
  return old == null;
}

function java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$containsKey__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Z(this$static.java_util_HashSet_map, o);
}

function java_util_HashSet_$remove__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static, o){
  return java_util_AbstractHashMap_$remove__Ljava_util_AbstractHashMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static.java_util_HashSet_map, o) != null;
}

function java_util_HashSet_HashSet__V(){
  this.java_util_HashSet_map = new java_util_HashMap_HashMap__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(37, 205, {3:1, 50:1}, java_util_HashSet_HashSet__V);
_.add__Ljava_lang_Object_2Z = function java_util_HashSet_add__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.contains__Ljava_lang_Object_2Z = function java_util_HashSet_contains__Ljava_lang_Object_2Z(o){
  return java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this, o);
}
;
_.isEmpty__Z = function java_util_HashSet_isEmpty__Z(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_HashSet_map) == 0;
}
;
_.iterator__Ljava_util_Iterator_2 = function java_util_HashSet_iterator__Ljava_util_Iterator_2(){
  var outerIter;
  return outerIter = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V((new java_util_AbstractMap$1_AbstractMap$1__Ljava_util_AbstractMap_2V(this.java_util_HashSet_map)).java_util_AbstractMap$1_this$01)).java_util_AbstractHashMap$EntrySet_this$01) , new java_util_AbstractMap$1$1_AbstractMap$1$1__Ljava_util_AbstractMap$1_2V(outerIter);
}
;
_.size__I = function java_util_HashSet_size__I(){
  return java_util_AbstractHashMap_$size__Ljava_util_AbstractHashMap_2I(this.java_util_HashSet_map);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1HashSet_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'HashSet', 37);
function java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      return entry;
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, hashCode){
  var chain;
  chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function java_util_InternalHashCodeMap_$getEntry__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_util_Map$Entry_2(this$static, key){
  var hashCode;
  return java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, java_util_InternalHashCodeMap_$getChainOrEmpty__Ljava_util_InternalHashCodeMap_2I_3Ljava_util_Map$Entry_2(this$static, key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0)));
}

function java_util_InternalHashCodeMap_$put__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.java_util_InternalHashCodeMap_backingMap.set(hashCode0, chain0);
  }
   else {
    entry = java_util_InternalHashCodeMap_$findEntryInChain__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2_3Ljava_util_Map$Entry_2Ljava_util_Map$Entry_2(key, chain0);
    if (entry) {
      return entry.setValue__Ljava_lang_Object_2Ljava_lang_Object_2(value_0);
    }
  }
  com_google_gwt_lang_Array_setCheck__Ljava_lang_Object_2ILjava_lang_Object_2Ljava_lang_Object_2(chain0, chain0.length, new java_util_AbstractMap$SimpleEntry_AbstractMap$SimpleEntry__Ljava_lang_Object_2Ljava_lang_Object_2V(key, value_0));
  ++this$static.java_util_InternalHashCodeMap_size;
  java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
  return null;
}

function java_util_InternalHashCodeMap_$remove__Ljava_util_InternalHashCodeMap_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(key) , hashCode | 0);
  chain0 = (chain = this$static.java_util_InternalHashCodeMap_backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if (java_util_HashMap_$equals__Ljava_util_HashMap_2Ljava_lang_Object_2Ljava_lang_Object_2Z(key, entry.getKey__Ljava_lang_Object_2())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.java_util_InternalHashCodeMap_backingMap[$intern_57](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.java_util_InternalHashCodeMap_size;
      java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalHashCodeMap_host);
      return entry.getValue__Ljava_lang_Object_2();
    }
  }
  return null;
}

function java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalHashCodeMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalHashCodeMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(139, 1, {}, java_util_InternalHashCodeMap_InternalHashCodeMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalHashCodeMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this);
}
;
_.java_util_InternalHashCodeMap_size = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'InternalHashCodeMap', 139);
function java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V(this$0){
  this.java_util_InternalHashCodeMap$1_this$01 = this$0;
  this.java_util_InternalHashCodeMap$1_chains = this.java_util_InternalHashCodeMap$1_this$01.java_util_InternalHashCodeMap_backingMap.entries();
  this.java_util_InternalHashCodeMap$1_chain = [];
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(79, 1, {}, java_util_InternalHashCodeMap$1_InternalHashCodeMap$1__Ljava_util_InternalHashCodeMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalHashCodeMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalHashCodeMap$1_lastEntry = this.java_util_InternalHashCodeMap$1_chain[this.java_util_InternalHashCodeMap$1_itemIndex++] , this.java_util_InternalHashCodeMap$1_lastEntry;
}
;
_.hasNext__Z = function java_util_InternalHashCodeMap$1_hasNext__Z(){
  var current;
  if (this.java_util_InternalHashCodeMap$1_itemIndex < this.java_util_InternalHashCodeMap$1_chain.length) {
    return true;
  }
  current = this.java_util_InternalHashCodeMap$1_chains.next();
  if (!current.done) {
    this.java_util_InternalHashCodeMap$1_chain = current.value[1];
    this.java_util_InternalHashCodeMap$1_itemIndex = 0;
    return true;
  }
  return false;
}
;
_.java_util_InternalHashCodeMap$1_itemIndex = 0;
_.java_util_InternalHashCodeMap$1_lastEntry = null;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalHashCodeMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'InternalHashCodeMap/1', 79);
function java_util_InternalJsMapFactory_$clinit__V(){
  java_util_InternalJsMapFactory_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_InternalJsMapFactory_jsMapCtor = java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2();
}

function java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function java_util_InternalJsMapFactory_getJsMapConstructor__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === $intern_1 && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2();
  }
}

function java_util_InternalJsMapFactory_getJsMapPolyFill__Lcom_google_gwt_core_client_JavaScriptObject_2(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype[$intern_57] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!java_util_InternalJsMapFactory_canHandleObjectCreateAndProto__Z()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype[$intern_57] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2(){
  java_util_InternalJsMapFactory_$clinit__V();
  return new java_util_InternalJsMapFactory_jsMapCtor;
}

var java_util_InternalJsMapFactory_jsMapCtor;
function java_util_InternalStringMap_$contains__Ljava_util_InternalStringMap_2Ljava_lang_String_2Z(this$static, key){
  return !(this$static.java_util_InternalStringMap_backingMap.get(key) === undefined);
}

function java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  return this$static.java_util_InternalStringMap_backingMap.get(key);
}

function java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.java_util_InternalStringMap_backingMap.get(key);
  this$static.java_util_InternalStringMap_backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
   else {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
  return oldValue;
}

function java_util_InternalStringMap_$remove__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static, key){
  var value_0;
  value_0 = this$static.java_util_InternalStringMap_backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.java_util_InternalStringMap_valueMod;
  }
   else {
    this$static.java_util_InternalStringMap_backingMap[$intern_57](key);
    --this$static.java_util_InternalStringMap_size;
    java_util_ConcurrentModificationDetector_structureChanged__Ljava_lang_Object_2V(this$static.java_util_InternalStringMap_host);
  }
  return value_0;
}

function java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V(host){
  this.java_util_InternalStringMap_backingMap = java_util_InternalJsMapFactory_newJsMap__Ljava_util_InternalJsMap_2();
  this.java_util_InternalStringMap_host = host;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(140, 1, {}, java_util_InternalStringMap_InternalStringMap__Ljava_util_AbstractHashMap_2V);
_.iterator__Ljava_util_Iterator_2 = function java_util_InternalStringMap_iterator__Ljava_util_Iterator_2(){
  return new java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this);
}
;
_.java_util_InternalStringMap_size = 0;
_.java_util_InternalStringMap_valueMod = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'InternalStringMap', 140);
function java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V(this$0){
  this.java_util_InternalStringMap$1_this$01 = this$0;
  this.java_util_InternalStringMap$1_entries = this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_backingMap.entries();
  this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next();
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(80, 1, {}, java_util_InternalStringMap$1_InternalStringMap$1__Ljava_util_InternalStringMap_2V);
_.next__Ljava_lang_Object_2 = function java_util_InternalStringMap$1_next__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$1_last = this.java_util_InternalStringMap$1_current , this.java_util_InternalStringMap$1_current = this.java_util_InternalStringMap$1_entries.next() , new java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this.java_util_InternalStringMap$1_this$01, this.java_util_InternalStringMap$1_last, this.java_util_InternalStringMap$1_this$01.java_util_InternalStringMap_valueMod);
}
;
_.hasNext__Z = function java_util_InternalStringMap$1_hasNext__Z(){
  return !this.java_util_InternalStringMap$1_current.done;
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$1_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'InternalStringMap/1', 80);
function java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this$static){
  if (this$static.java_util_InternalStringMap$2_this$01.java_util_InternalStringMap_valueMod != this$static.java_util_InternalStringMap$2_val$lastValueMod3) {
    return java_util_InternalStringMap_$get__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2(this$static.java_util_InternalStringMap$2_this$01, this$static.java_util_InternalStringMap$2_val$entry2.value[0]);
  }
  return this$static.java_util_InternalStringMap$2_val$entry2.value[1];
}

function java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V(this$0, val$entry, val$lastValueMod){
  this.java_util_InternalStringMap$2_this$01 = this$0;
  this.java_util_InternalStringMap$2_val$entry2 = val$entry;
  this.java_util_InternalStringMap$2_val$lastValueMod3 = val$lastValueMod;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(141, 212, $intern_56, java_util_InternalStringMap$2_InternalStringMap$2__Ljava_util_InternalStringMap_2V);
_.getKey__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getKey__Ljava_lang_Object_2(){
  return this.java_util_InternalStringMap$2_val$entry2.value[0];
}
;
_.getValue__Ljava_lang_Object_2 = function java_util_InternalStringMap$2_getValue__Ljava_lang_Object_2(){
  return java_util_InternalStringMap$2_$getValue__Ljava_util_InternalStringMap$2_2Ljava_lang_Object_2(this);
}
;
_.setValue__Ljava_lang_Object_2Ljava_lang_Object_2 = function java_util_InternalStringMap$2_setValue__Ljava_lang_Object_2Ljava_lang_Object_2(object){
  return java_util_InternalStringMap_$put__Ljava_util_InternalStringMap_2Ljava_lang_String_2Ljava_lang_Object_2Ljava_lang_Object_2(this.java_util_InternalStringMap$2_this$01, this.java_util_InternalStringMap$2_val$entry2.value[0], object);
}
;
_.java_util_InternalStringMap$2_val$lastValueMod3 = 0;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1InternalStringMap$2_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'InternalStringMap/2', 141);
function java_util_NoSuchElementException_NoSuchElementException__V(){
  java_lang_RuntimeException_RuntimeException__V.call(this);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(30, 8, $intern_17, java_util_NoSuchElementException_NoSuchElementException__V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1NoSuchElementException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'NoSuchElementException', 30);
function java_util_Objects_equals__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b){
  return com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(a) === com_google_gwt_lang_Cast_maskUndefined__Ljava_lang_Object_2Ljava_lang_Object_2(b) || a != null && java_lang_Object_equals_1Ljava_1lang_1Object_1_1Z_1_1devirtual$__Ljava_lang_Object_2Ljava_lang_Object_2Z(a, b);
}

function java_util_Objects_hashCode__Ljava_lang_Object_2I(o){
  return o != null?java_lang_Object_hashCode_1_1I_1_1devirtual$__Ljava_lang_Object_2I(o):0;
}

function java_util_StringJoiner_$add__Ljava_util_StringJoiner_2Ljava_lang_CharSequence_2Ljava_util_StringJoiner_2(this$static, newElement){
  !this$static.java_util_StringJoiner_builder?(this$static.java_util_StringJoiner_builder = new java_lang_StringBuilder_StringBuilder__Ljava_lang_String_2V(this$static.java_util_StringJoiner_prefix)):java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_String_2Ljava_lang_StringBuilder_2(this$static.java_util_StringJoiner_builder, this$static.java_util_StringJoiner_delimiter);
  java_lang_StringBuilder_$append__Ljava_lang_StringBuilder_2Ljava_lang_CharSequence_2Ljava_lang_StringBuilder_2(this$static.java_util_StringJoiner_builder, newElement);
  return this$static;
}

function java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V(prefix, suffix){
  this.java_util_StringJoiner_delimiter = ', ';
  this.java_util_StringJoiner_prefix = prefix;
  this.java_util_StringJoiner_suffix = suffix;
  this.java_util_StringJoiner_emptyValue = this.java_util_StringJoiner_prefix + ('' + this.java_util_StringJoiner_suffix);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(69, 1, {}, java_util_StringJoiner_StringJoiner__Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2Ljava_lang_CharSequence_2V);
_.toString__Ljava_lang_String_2 = function java_util_StringJoiner_toString__Ljava_lang_String_2(){
  return !this.java_util_StringJoiner_builder?this.java_util_StringJoiner_emptyValue:this.java_util_StringJoiner_suffix.length == 0?this.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string:this.java_util_StringJoiner_builder.java_lang_AbstractStringBuilder_string + ('' + this.java_util_StringJoiner_suffix);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1StringJoiner_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_54, 'StringJoiner', 69);
function java_util_logging_Level_$clinit__V(){
  java_util_logging_Level_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  java_util_logging_Level_FINE = new java_util_logging_Level$LevelFine_Level$LevelFine__V;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(208, 1, $intern_14);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level_getName__Ljava_lang_String_2(){
  return 'DUMMY';
}
;
_.toString__Ljava_lang_String_2 = function java_util_logging_Level_toString__Ljava_lang_String_2(){
  return this.getName__Ljava_lang_String_2();
}
;
var java_util_logging_Level_FINE;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'Level', 208);
function java_util_logging_Level$LevelFine_Level$LevelFine__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(122, 208, $intern_14, java_util_logging_Level$LevelFine_Level$LevelFine__V);
_.getName__Ljava_lang_String_2 = function java_util_logging_Level$LevelFine_getName__Ljava_lang_String_2(){
  return 'FINE';
}
;
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Level$LevelFine_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'Level/LevelFine', 122);
function java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V(){
  return;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(22, 1, {}, java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Ljava_1util_1logging_1Logger_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_58, 'Logger', 22);
function javaemul_internal_ArrayHelper_insertTo__Ljava_lang_Object_2ILjava_lang_Object_2V(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function javaemul_internal_InternalPreconditions_checkCriticalArgument__ZLjava_lang_Object_2V(expression, errorMessage){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalArgumentException_IllegalArgumentException__Ljava_lang_String_2V(errorMessage));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalArrayType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ArrayStoreException_ArrayStoreException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElement__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_util_NoSuchElementException_NoSuchElementException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalElementIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  if (reference == null) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__V);
  }
  return reference;
}

function javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2V(reference){
  if (!reference) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_NullPointerException_NullPointerException__Ljava_lang_String_2V('Cannot suppress a null exception.'));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalPositionIndex__IIV(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IndexOutOfBoundsException_IndexOutOfBoundsException__Ljava_lang_String_2V('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalState__ZLjava_lang_Object_2V(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_IllegalStateException_IllegalStateException__Ljava_lang_String_2V("Can't overwrite cause"));
  }
}

function javaemul_internal_InternalPreconditions_checkCriticalType__ZV(expression){
  if (!expression) {
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new java_lang_ClassCastException_ClassCastException__V);
  }
}

function javaemul_internal_InternalPreconditions_checkNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference){
  javaemul_internal_InternalPreconditions_checkCriticalNotNull__Ljava_lang_Object_2Ljava_lang_Object_2(reference);
  return reference;
}

function javaemul_internal_JsUtils_setPropertySafe__Ljava_lang_Object_2Ljava_lang_String_2Ljava_lang_Object_2V(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function javaemul_internal_ObjectHashing_getHashCode__Ljava_lang_Object_2I(o){
  return o.$H || (o.$H = ++javaemul_internal_ObjectHashing_nextHashId);
}

var javaemul_internal_ObjectHashing_nextHashId = 0;
function javaemul_internal_StringHashCache_$clinit__V(){
  javaemul_internal_StringHashCache_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  javaemul_internal_StringHashCache_back = {};
  javaemul_internal_StringHashCache_front = {};
}

function javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + java_lang_String_$charAt__Ljava_lang_String_2IC(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function javaemul_internal_StringHashCache_getHashCode__Ljava_lang_String_2I(str){
  javaemul_internal_StringHashCache_$clinit__V();
  var hashCode, key, result;
  key = ':' + str;
  result = javaemul_internal_StringHashCache_front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = javaemul_internal_StringHashCache_back[key];
  hashCode = result === undefined?javaemul_internal_StringHashCache_compute__Ljava_lang_String_2I(str):result;
  javaemul_internal_StringHashCache_increment__V();
  javaemul_internal_StringHashCache_front[key] = hashCode;
  return hashCode;
}

function javaemul_internal_StringHashCache_increment__V(){
  if (javaemul_internal_StringHashCache_count == 256) {
    javaemul_internal_StringHashCache_back = javaemul_internal_StringHashCache_front;
    javaemul_internal_StringHashCache_front = {};
    javaemul_internal_StringHashCache_count = 0;
  }
  ++javaemul_internal_StringHashCache_count;
}

var javaemul_internal_StringHashCache_back, javaemul_internal_StringHashCache_count = 0, javaemul_internal_StringHashCache_front;
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Integer_2(value_0){
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  return java_lang_Integer_valueOf__ILjava_lang_Integer_2(com_google_gwt_lang_Cast_round_1int__DI(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toDouble__Lcom_google_gwt_json_client_JSONValue_2D(value_0)));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Integer_2(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_AbstractJsonEncoderDecoder$5__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(167, 217, {}, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_AbstractJsonEncoderDecoder$5__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$5_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder$5_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'AbstractJsonEncoderDecoder/5', 167);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Float_2(value_0){
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  return new java_lang_Float_Float__FV(org_fusesource_restygwt_client_AbstractJsonEncoderDecoder_toDouble__Lcom_google_gwt_json_client_JSONValue_2D(value_0));
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Float_2(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_AbstractJsonEncoderDecoder$7__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(168, 217, {}, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_AbstractJsonEncoderDecoder$7__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$7_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder$7_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'AbstractJsonEncoderDecoder/7', 168);
function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_String_2(value_0);
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_String_2(value_0){
  var str;
  if (!value_0 || !!value_0.isNull__Lcom_google_gwt_json_client_JSONNull_2()) {
    return null;
  }
  str = value_0.isString__Lcom_google_gwt_json_client_JSONString_2();
  if (!str) {
    if (!!value_0.isBoolean__Lcom_google_gwt_json_client_JSONBoolean_2() || !!value_0.isNumber__Lcom_google_gwt_json_client_JSONNumber_2()) {
      return value_0.toString__Ljava_lang_String_2();
    }
    throw com_google_gwt_lang_Exceptions_toJs__Ljava_lang_Object_2Ljava_lang_Object_2(new org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V('Expected a json string, but was given: ' + value_0));
  }
  return str.com_google_gwt_json_client_JSONString_value;
}

function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_AbstractJsonEncoderDecoder$9__V(){
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(169, 217, {}, org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_AbstractJsonEncoderDecoder$9__V);
_.decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2 = function org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_decode__Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0){
  return org_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_$decode__Lorg_fusesource_restygwt_client_AbstractJsonEncoderDecoder$9_2Lcom_google_gwt_json_client_JSONValue_2Ljava_lang_Object_2(value_0);
}
;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1AbstractJsonEncoderDecoder$9_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'AbstractJsonEncoderDecoder/9', 169);
function org_fusesource_restygwt_client_Defaults_$clinit__V(){
  var com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0, com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0;
  org_fusesource_restygwt_client_Defaults_$clinit__V = com_google_gwt_lang_Runtime_emptyMethod__V;
  org_fusesource_restygwt_client_Defaults_serviceRoot = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0 = '__gwtDevModeHook:' + $moduleName + ':moduleBase' , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0 = $wnd || self , com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_global_0[com_google_gwt_core_client_impl_Impl_getModuleBaseURL__Ljava_lang_String_2_key_0] || $moduleBase);
}

function org_fusesource_restygwt_client_Defaults_setServiceRoot__Ljava_lang_String_2V(serviceRoot){
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  var suffixlength;
  suffixlength = '/'.length;
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(serviceRoot.substr(serviceRoot.length - suffixlength, suffixlength), '/') || (serviceRoot += '/');
  org_fusesource_restygwt_client_Defaults_serviceRoot = serviceRoot;
}

var org_fusesource_restygwt_client_Defaults_addXHttpMethodOverrideHeader = true, org_fusesource_restygwt_client_Defaults_serviceRoot;
function org_fusesource_restygwt_client_FailedStatusCodeException_FailedStatusCodeException__Ljava_lang_String_2IV(message){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, message);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(164, 8, $intern_17);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1FailedStatusCodeException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'FailedStatusCodeException', 164);
function org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V(response){
  var lastArg;
  org_fusesource_restygwt_client_FailedStatusCodeException_FailedStatusCodeException__Ljava_lang_String_2IV.call(this, (lastArg = response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.statusText , response.com_google_gwt_http_client_ResponseImpl_xmlHttpRequest.status , lastArg));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(165, 164, $intern_17, org_fusesource_restygwt_client_FailedResponseException_FailedResponseException__Lcom_google_gwt_http_client_Response_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1FailedResponseException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'FailedResponseException', 165);
function org_fusesource_restygwt_client_FileSystemHelper_isRequestGoingToFileSystem__Ljava_lang_String_2Ljava_lang_String_2Z(baseUrl, requestUrl){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 4), 'file')) {
    return true;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(baseUrl.substr(0, 4), 'file') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 1), '/')) {
    return true;
  }
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(baseUrl.substr(0, 4), 'file') && java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(requestUrl.substr(0, 1), '.')) {
    return true;
  }
  return false;
}

function org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V(msg){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2V.call(this, msg);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(43, 8, $intern_17, org_fusesource_restygwt_client_JsonEncoderDecoder$DecodingException_JsonEncoderDecoder$DecodingException__Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1JsonEncoderDecoder$DecodingException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'JsonEncoderDecoder/DecodingException', 43);
function org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(this$static, headers){
  var entry, entry$iterator;
  if (headers) {
    for (entry$iterator = new java_util_AbstractHashMap$EntrySetIterator_AbstractHashMap$EntrySetIterator__Ljava_util_AbstractHashMap_2V((new java_util_AbstractHashMap$EntrySet_AbstractHashMap$EntrySet__Ljava_util_AbstractHashMap_2V(headers)).java_util_AbstractHashMap$EntrySet_this$01); entry$iterator.java_util_AbstractHashMap$EntrySetIterator_hasNext;) {
      entry = java_util_AbstractHashMap$EntrySetIterator_$next__Ljava_util_AbstractHashMap$EntrySetIterator_2Ljava_util_Map$Entry_2(entry$iterator);
      com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this$static.org_fusesource_restygwt_client_Method_builder, com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getKey__Ljava_lang_Object_2()), com_google_gwt_lang_Cast_castToString__Ljava_lang_Object_2Ljava_lang_Object_2(entry.getValue__Ljava_lang_Object_2()));
    }
  }
  return this$static;
}

function org_fusesource_restygwt_client_Method_$isExpected__Lorg_fusesource_restygwt_client_Method_2IZ(this$static, status_0){
  var baseUrl, requestUrl;
  baseUrl = com_google_gwt_core_client_impl_Impl_getHostPageBaseURL__Ljava_lang_String_2();
  requestUrl = this$static.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_url;
  return org_fusesource_restygwt_client_FileSystemHelper_isRequestGoingToFileSystem__Ljava_lang_String_2Ljava_lang_String_2Z(baseUrl, requestUrl) || this$static.org_fusesource_restygwt_client_Method_anyStatus || java_util_HashSet_$contains__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this$static.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(status_0));
}

function org_fusesource_restygwt_client_Method_$send__Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestCallback_2Ljava_lang_Object_2(this$static, callback){
  this$static.org_fusesource_restygwt_client_Method_builder.com_google_gwt_http_client_RequestBuilder_timeoutMillis == 0 && (org_fusesource_restygwt_client_Defaults_$clinit__V() , false) && com_google_gwt_http_client_RequestBuilder_$setTimeoutMillis__Lcom_google_gwt_http_client_RequestBuilder_2IV(this$static.org_fusesource_restygwt_client_Method_builder, (org_fusesource_restygwt_client_Defaults_$clinit__V() , -1));
  com_google_gwt_http_client_RequestBuilder_$setCallback__Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_RequestCallback_2V(this$static.org_fusesource_restygwt_client_Method_builder, callback);
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  return org_fusesource_restygwt_client_dispatcher_DefaultDispatcher_$send__Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_Request_2(this$static.org_fusesource_restygwt_client_Method_builder);
}

function org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(resource){
  this.org_fusesource_restygwt_client_Method_expectedStatuses = new java_util_HashSet_HashSet__V;
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(200));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(201));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(204));
  java_util_HashSet_$add__Ljava_util_HashSet_2Ljava_lang_Object_2Z(this.org_fusesource_restygwt_client_Method_expectedStatuses, java_lang_Integer_valueOf__ILjava_lang_Integer_2(1223));
  new java_util_HashMap_HashMap__V;
  this.org_fusesource_restygwt_client_Method_builder = new org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(org_fusesource_restygwt_client_Resource_$getUri__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2(resource));
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(143, 1, {}, org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V);
_.org_fusesource_restygwt_client_Method_anyStatus = false;
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Method_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'Method', 143);
function org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V(url_0){
  com_google_gwt_http_client_RequestBuilder_$clinit__V();
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('httpMethod', 'GET');
  com_google_gwt_http_client_StringValidator_throwIfEmptyOrNull__Ljava_lang_String_2Ljava_lang_String_2V('url', url_0);
  this.com_google_gwt_http_client_RequestBuilder_httpMethod = 'GET';
  this.com_google_gwt_http_client_RequestBuilder_url = url_0;
  this.com_google_gwt_http_client_RequestBuilder_requestData = null;
  org_fusesource_restygwt_client_Defaults_$clinit__V();
  org_fusesource_restygwt_client_Defaults_addXHttpMethodOverrideHeader && com_google_gwt_http_client_RequestBuilder_$setHeader__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Ljava_lang_String_2V(this, 'X-HTTP-Method-Override', 'GET');
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(145, 144, {}, org_fusesource_restygwt_client_Method$MethodRequestBuilder_Method$MethodRequestBuilder__Ljava_lang_String_2Ljava_lang_String_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Method$MethodRequestBuilder_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'Method/MethodRequestBuilder', 145);
function org_fusesource_restygwt_client_Resource_$get__Lorg_fusesource_restygwt_client_Resource_2Lorg_fusesource_restygwt_client_Method_2(this$static){
  return org_fusesource_restygwt_client_Method_$headers__Lorg_fusesource_restygwt_client_Method_2Ljava_util_Map_2Lorg_fusesource_restygwt_client_Method_2(new org_fusesource_restygwt_client_Method_Method__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2V(this$static), this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_$getUri__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2(this$static){
  if (this$static.org_fusesource_restygwt_client_Resource_query != null) {
    return this$static.org_fusesource_restygwt_client_Resource_path + '?' + this$static.org_fusesource_restygwt_client_Resource_query;
  }
  return this$static.org_fusesource_restygwt_client_Resource_path;
}

function org_fusesource_restygwt_client_Resource_$resolve__Lorg_fusesource_restygwt_client_Resource_2Ljava_lang_String_2Lorg_fusesource_restygwt_client_Resource_2(this$static, path){
  if (java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 5), 'http:') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 6), 'https:') || java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 5), 'file:')) {
    return new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(path, this$static.org_fusesource_restygwt_client_Resource_query, this$static.org_fusesource_restygwt_client_Resource_headers);
  }
  java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(path.substr(0, 1), '/') && (path = path.substr(1));
  return new org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(this$static.org_fusesource_restygwt_client_Resource_path + '/' + path, this$static.org_fusesource_restygwt_client_Resource_query, this$static.org_fusesource_restygwt_client_Resource_headers);
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V(uri_0){
  org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_util_Map_2V.call(this, uri_0);
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V(uri_0, query, headers){
  var suffixlength;
  this.org_fusesource_restygwt_client_Resource_path = (suffixlength = '/'.length , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(uri_0, uri_0.length - 1):uri_0);
  this.org_fusesource_restygwt_client_Resource_query = query;
  this.org_fusesource_restygwt_client_Resource_headers = headers?headers:null;
}

function org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_util_Map_2V(uri_0){
  var pos, suffixlength;
  pos = java_lang_String_$indexOf__Ljava_lang_String_2Ljava_lang_String_2I(uri_0, String.fromCharCode(63));
  if (pos >= 0) {
    this.org_fusesource_restygwt_client_Resource_path = uri_0.substr(0, pos);
    this.org_fusesource_restygwt_client_Resource_query = uri_0.substr(pos + 1);
  }
   else {
    this.org_fusesource_restygwt_client_Resource_path = (suffixlength = '/'.length , java_lang_String_$equals__Ljava_lang_String_2Ljava_lang_Object_2Z(uri_0.substr(uri_0.length - suffixlength, suffixlength), '/')?java_lang_String_$substring__Ljava_lang_String_2IILjava_lang_String_2(uri_0, uri_0.length - 1):uri_0);
    this.org_fusesource_restygwt_client_Resource_query = null;
  }
  this.org_fusesource_restygwt_client_Resource_headers = null;
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(40, 1, {}, org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2V, org_fusesource_restygwt_client_Resource_Resource__Ljava_lang_String_2Ljava_lang_String_2Ljava_util_Map_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1Resource_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'Resource', 40);
function org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V(e){
  java_lang_RuntimeException_RuntimeException__Ljava_lang_String_2Ljava_lang_Throwable_2V.call(this, 'Response was NOT a valid JSON document', e);
}

com_google_gwt_lang_Runtime_defineClass__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V(84, 8, $intern_17, org_fusesource_restygwt_client_ResponseFormatException_ResponseFormatException__Ljava_lang_String_2Ljava_lang_Throwable_2V);
var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1ResponseFormatException_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2($intern_5, 'ResponseFormatException', 84);
function org_fusesource_restygwt_client_dispatcher_DefaultDispatcher_$send__Lorg_fusesource_restygwt_client_dispatcher_DefaultDispatcher_2Lorg_fusesource_restygwt_client_Method_2Lcom_google_gwt_http_client_RequestBuilder_2Lcom_google_gwt_http_client_Request_2(builder){
  if (com_google_gwt_logging_client_LogConfiguration_loggingIsEnabled__Z()) {
    java_lang_Class_$ensureNamesAreInitialized__Ljava_lang_Class_2V(com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit);
    new java_util_logging_Logger_Logger__Ljava_lang_String_2Ljava_lang_String_2V;
  }
  return com_google_gwt_http_client_StringValidator_throwIfNull__Ljava_lang_String_2Ljava_lang_Object_2V('callback', builder.com_google_gwt_http_client_RequestBuilder_callback) , com_google_gwt_http_client_RequestBuilder_$doSend__Lcom_google_gwt_http_client_RequestBuilder_2Ljava_lang_String_2Lcom_google_gwt_http_client_RequestCallback_2Lcom_google_gwt_http_client_Request_2(builder, builder.com_google_gwt_http_client_RequestBuilder_requestData, builder.com_google_gwt_http_client_RequestBuilder_callback);
}

var com_google_gwt_lang_ClassLiteralHolder_Lorg_1fusesource_1restygwt_1client_1dispatcher_1DefaultDispatcher_12_1classLit = java_lang_Class_createForClass__Ljava_lang_String_2Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2Ljava_lang_Class_2Ljava_lang_Class_2('org.fusesource.restygwt.client.dispatcher', 'DefaultDispatcher', null);
var $entry = (com_google_gwt_core_client_impl_Impl_$clinit__V() , com_google_gwt_core_client_impl_Impl_entry__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2);
var gwtOnLoad = gwtOnLoad = com_google_gwt_lang_ModuleUtils_gwtOnLoad__Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2Lcom_google_gwt_core_client_JavaScriptObject_2V;
com_google_gwt_lang_ModuleUtils_addInitFunctions__V(com_google_gwt_lang_com_100046exampleproject_100046gwt_100046init_100046Init_1_1EntryMethodHolder_init__V);
com_google_gwt_lang_ModuleUtils_setGwtProperty__Ljava_lang_String_2Lcom_google_gwt_core_client_JavaScriptObject_2V('permProps', [[['locale', 'default'], ['user.agent', $intern_50]]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=frontend-0.js

