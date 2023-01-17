import mapValues from 'lodash.mapvalues'

type JsonObject = { [Key in string]?: JsonValue }

type JsonValue = string | number | boolean | JsonObject | JsonArray | null
interface JsonArray extends Array<JsonValue> {}

export function parsePrismaJsonValue<T>(json: JsonValue): T {
   if (json === null) return null as T
   return typeof json === 'string'
      ? JSON.parse(json)
      : Array.isArray(json)
      ? json.map(parsePrismaJsonValue)
      : typeof json === 'object'
      ? mapValues(json, parsePrismaJsonValue)
      : json
}
