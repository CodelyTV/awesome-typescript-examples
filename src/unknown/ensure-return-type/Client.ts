import { deserializeStorageAny } from "./deserializeStorageAny";
import { deserializeStorageUnkown } from "./deserializeStorageUnkown";
import { UserSettings } from "./UserSettings";

const userSettingsAny = deserializeStorageAny("userSettings");
// userSettingsAny: any

console.log(userSettingsAny.notValidProp); // all ok but we have an error

const userSettings = deserializeStorageUnkown("userSettings");
// userSettingsAny: unknown

console.log(userSettings.notValidProp); // object is of type unkown error

const userSettingsTyped = deserializeStorageUnkown(
  "userSettings"
) as UserSettings;
// userSettingsAny: UserSettings

console.log(userSettingsTyped.theme); // all right
