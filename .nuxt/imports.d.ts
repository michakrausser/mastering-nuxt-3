export { useHead, useMeta } from '#head';
export { isVue2, isVue3 } from 'vue-demi';
export { useAsyncData, useLazyAsyncData, refreshNuxtData, clearNuxtData, defineNuxtComponent, useNuxtApp, defineNuxtPlugin, useRuntimeConfig, useState, useFetch, useLazyFetch, useCookie, useRequestHeaders, useRequestEvent, setResponseStatus, setPageLayout, useRouter, useRoute, useActiveRoute, defineNuxtRouteMiddleware, navigateTo, abortNavigation, addRouteMiddleware, throwError, showError, clearError, isNuxtError, useError, createError, defineNuxtLink, useAppConfig, updateAppConfig, defineAppConfig, preloadComponents, preloadRouteComponents, prefetchComponents, loadPayload, preloadPayload, isPrerendered } from '#app';
export { withCtx, withDirectives, withKeys, withMemo, withModifiers, withScopeId, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onServerPrefetch, onUnmounted, onUpdated, computed, customRef, isProxy, isReactive, isReadonly, isRef, markRaw, proxyRefs, reactive, readonly, ref, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, watch, watchEffect, isShallow, effect, effectScope, getCurrentScope, onScopeDispose, defineComponent, defineAsyncComponent, resolveComponent, getCurrentInstance, h, inject, nextTick, provide, useAttrs, useCssModule, useCssVars, useSlots, useTransitionState } from 'vue';
export { computedAsync, asyncComputed, computedEager, eagerComputed, computedInject, computedWithControl, controlledComputed, createEventHook, createGlobalState, createInjectionState, createSharedComposable, createUnrefFn, extendRef, isDefined, makeDestructurable, onClickOutside, onKeyStroke, onLongPress, onStartTyping, reactify, createReactiveFn, reactifyObject, reactiveComputed, reactiveOmit, reactivePick, refAutoReset, autoResetRef, refDebounced, useDebounce, debouncedRef, refDefault, refThrottled, useThrottle, throttledRef, refWithControl, controlledRef, resolveRef, resolveUnref, syncRef, syncRefs, templateRef, toReactive, tryOnBeforeMount, tryOnBeforeUnmount, tryOnMounted, tryOnScopeDispose, tryOnUnmounted, unrefElement, until, useActiveElement, useArrayEvery, useArrayFilter, useArrayFind, useArrayFindIndex, useArrayJoin, useArrayMap, useArrayReduce, useArraySome, useAsyncQueue, useAsyncState, useBase64, useBattery, useBluetooth, useBreakpoints, useBroadcastChannel, useBrowserLocation, useCached, useClipboard, useCloned, useColorMode, useConfirmDialog, useCounter, useCssVar, useCurrentElement, useCycleList, useDark, useDateFormat, useDebouncedRefHistory, useDebounceFn, useDeviceMotion, useDeviceOrientation, useDevicePixelRatio, useDevicesList, useDisplayMedia, useDocumentVisibility, useDraggable, useDropZone, useElementBounding, useElementByPoint, useElementHover, useElementSize, useElementVisibility, useEventBus, useEventListener, useEventSource, useEyeDropper, useFavicon, useFileDialog, useFileSystemAccess, useFocus, useFocusWithin, useFps, useFullscreen, useGamepad, useGeolocation, useIdle, useImage, useInfiniteScroll, useIntersectionObserver, useInterval, useIntervalFn, useKeyModifier, useLastChanged, useLocalStorage, useMagicKeys, useManualRefHistory, useMediaControls, useMediaQuery, useMemoize, useMemory, useMounted, useMouse, useMouseInElement, useMousePressed, useMutationObserver, useNavigatorLanguage, useNetwork, useNow, useObjectUrl, useOffsetPagination, useOnline, usePageLeave, useParallax, usePermission, usePointer, usePointerSwipe, usePreferredColorScheme, usePreferredContrast, usePreferredDark, usePreferredLanguages, usePreferredReducedMotion, useRafFn, useRefHistory, useResizeObserver, useScreenOrientation, useScreenSafeArea, useScriptTag, useScroll, useScrollLock, useSessionStorage, useShare, useSorted, useSpeechRecognition, useSpeechSynthesis, useStepper, useStorageAsync, useStyleTag, useSupported, useSwipe, useTemplateRefsList, useTextareaAutosize, useTextDirection, useTextSelection, useThrottledRefHistory, useThrottleFn, useTimeAgo, useTimeout, useTimeoutFn, useTimeoutPoll, useTimestamp, useToggle, useToNumber, useToString, useTransition, useUrlSearchParams, useUserMedia, useVibrate, useVirtualList, useVModel, useVModels, useWakeLock, useWebNotification, useWebSocket, useWebWorker, useWebWorkerFn, useWindowFocus, useWindowScroll, useWindowSize, watchArray, watchAtMost, watchDebounced, debouncedWatch, watchIgnorable, ignorableWatch, watchOnce, watchPausable, pausableWatch, watchThrottled, throttledWatch, watchTriggerable, watchWithFilter, whenever } from '@vueuse/core';
export { useCourse } from '../composables/useCourse';
export { default as courseData } from '../composables/courseData';
export { useSupabaseAuthClient } from '../node_modules/@nuxtjs/supabase/dist/runtime/composables/useSupabaseAuthClient';
export { default as useFirstLesson } from '../composables/useFirstLesson';
export { useSupabaseUser } from '../node_modules/@nuxtjs/supabase/dist/runtime/composables/useSupabaseUser';
export { useSupabaseClient } from '../node_modules/@nuxtjs/supabase/dist/runtime/composables/useSupabaseClient';
export { useSupabaseToken } from '../node_modules/@nuxtjs/supabase/dist/runtime/composables/useSupabaseToken';
export { definePageMeta } from '../node_modules/nuxt/dist/pages/runtime/composables';
export { useLink } from 'vue-router';