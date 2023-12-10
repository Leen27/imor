// @ts-ignore
import xml2js from 'xml2js'
import type { Rule } from '../types/index'
const parseString = xml2js.parseString
const builder = new xml2js.Builder();

export function xml2json(xmlString: string):Rule {
    return parseString(xmlString)
}

export function json2xml(jsonObj: any) {
    return builder(jsonObj)
}