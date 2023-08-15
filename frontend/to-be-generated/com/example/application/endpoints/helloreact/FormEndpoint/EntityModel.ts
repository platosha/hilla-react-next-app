import { _getPropertyModel as _getPropertyModel_1, Min as Min_1, NotBlank as NotBlank_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "Frontend/form/src/index.js";
import type Entity_1 from "./Entity.js";
class EntityModel<T extends Entity_1 = Entity_1> extends ObjectModel_1<T> {
    declare static createEmptyValue: () => Entity_1;
    get choice(): StringModel_1 {
        return this[_getPropertyModel_1]("choice", StringModel_1, [true, new NotNull_1(), new NotBlank_1()]) as StringModel_1;
    }
    get date(): StringModel_1 {
        return this[_getPropertyModel_1]("date", StringModel_1, [true]) as StringModel_1;
    }
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", StringModel_1, [true, new NotNull_1(), new NotBlank_1()]) as StringModel_1;
    }
    get number(): NumberModel_1 {
        return this[_getPropertyModel_1]("number", NumberModel_1, [false, new Min_1(1)]) as NumberModel_1;
    }
}
export default EntityModel;
