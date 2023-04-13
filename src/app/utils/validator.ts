export class Validator {
    static isNullOrEmpty(value: string | number = ''): boolean {
        if (typeof value === 'number') return !value || value <= 0;
        
        return !value || value?.length <= 0;
    }
}