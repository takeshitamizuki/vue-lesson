import {useRefHistory} from "@/composables/refHistory.js";
import {toValue, watchEffect} from "vue";

export function useRefLimitedHistory(source, capacity) {
  const { history, undo } = useRefHistory(source)
  watchEffect(() => {
    if (history.value.length > toValue(capacity)) {
      history.value.shift()
    }
  })
  return {
    history,
    undo
  }
}