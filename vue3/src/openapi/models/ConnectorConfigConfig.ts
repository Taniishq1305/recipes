/* tslint:disable */
/* eslint-disable */
/**
 * Django Recipes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ConnectorConfigConfig
 */
export interface ConnectorConfigConfig {
    /**
     * 
     * @type {number}
     * @memberof ConnectorConfigConfig
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfig
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfig
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfig
     */
    token?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfig
     */
    todoEntity?: string | null;
    /**
     * Is Connector Enabled
     * @type {boolean}
     * @memberof ConnectorConfigConfig
     */
    enabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectorConfigConfig
     */
    onShoppingListEntryCreatedEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectorConfigConfig
     */
    onShoppingListEntryUpdatedEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ConnectorConfigConfig
     */
    onShoppingListEntryDeletedEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConnectorConfigConfig
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the ConnectorConfigConfig interface.
 */
export function instanceOfConnectorConfigConfig(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ConnectorConfigConfigFromJSON(json: any): ConnectorConfigConfig {
    return ConnectorConfigConfigFromJSONTyped(json, false);
}

export function ConnectorConfigConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConnectorConfigConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'todoEntity': !exists(json, 'todo_entity') ? undefined : json['todo_entity'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'onShoppingListEntryCreatedEnabled': !exists(json, 'on_shopping_list_entry_created_enabled') ? undefined : json['on_shopping_list_entry_created_enabled'],
        'onShoppingListEntryUpdatedEnabled': !exists(json, 'on_shopping_list_entry_updated_enabled') ? undefined : json['on_shopping_list_entry_updated_enabled'],
        'onShoppingListEntryDeletedEnabled': !exists(json, 'on_shopping_list_entry_deleted_enabled') ? undefined : json['on_shopping_list_entry_deleted_enabled'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function ConnectorConfigConfigToJSON(value?: ConnectorConfigConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'url': value.url,
        'token': value.token,
        'todo_entity': value.todoEntity,
        'enabled': value.enabled,
        'on_shopping_list_entry_created_enabled': value.onShoppingListEntryCreatedEnabled,
        'on_shopping_list_entry_updated_enabled': value.onShoppingListEntryUpdatedEnabled,
        'on_shopping_list_entry_deleted_enabled': value.onShoppingListEntryDeletedEnabled,
    };
}

