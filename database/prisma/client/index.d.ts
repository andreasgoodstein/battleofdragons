
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Battle
 * 
 */
export type Battle = $Result.DefaultSelection<Prisma.$BattlePayload>
/**
 * Model Dragon
 * 
 */
export type Dragon = $Result.DefaultSelection<Prisma.$DragonPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Battles
 * const battles = await prisma.battle.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Battles
   * const battles = await prisma.battle.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.battle`: Exposes CRUD operations for the **Battle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Battles
    * const battles = await prisma.battle.findMany()
    * ```
    */
  get battle(): Prisma.BattleDelegate<ExtArgs>;

  /**
   * `prisma.dragon`: Exposes CRUD operations for the **Dragon** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dragons
    * const dragons = await prisma.dragon.findMany()
    * ```
    */
  get dragon(): Prisma.DragonDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Battle: 'Battle',
    Dragon: 'Dragon'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "battle" | "dragon"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Battle: {
        payload: Prisma.$BattlePayload<ExtArgs>
        fields: Prisma.BattleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BattleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BattleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findFirst: {
            args: Prisma.BattleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BattleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          findMany: {
            args: Prisma.BattleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          create: {
            args: Prisma.BattleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          createMany: {
            args: Prisma.BattleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BattleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>[]
          }
          delete: {
            args: Prisma.BattleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          update: {
            args: Prisma.BattleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          deleteMany: {
            args: Prisma.BattleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BattleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BattleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BattlePayload>
          }
          aggregate: {
            args: Prisma.BattleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBattle>
          }
          groupBy: {
            args: Prisma.BattleGroupByArgs<ExtArgs>
            result: $Utils.Optional<BattleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BattleCountArgs<ExtArgs>
            result: $Utils.Optional<BattleCountAggregateOutputType> | number
          }
        }
      }
      Dragon: {
        payload: Prisma.$DragonPayload<ExtArgs>
        fields: Prisma.DragonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DragonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DragonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>
          }
          findFirst: {
            args: Prisma.DragonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DragonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>
          }
          findMany: {
            args: Prisma.DragonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>[]
          }
          create: {
            args: Prisma.DragonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>
          }
          createMany: {
            args: Prisma.DragonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DragonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>[]
          }
          delete: {
            args: Prisma.DragonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>
          }
          update: {
            args: Prisma.DragonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>
          }
          deleteMany: {
            args: Prisma.DragonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DragonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DragonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DragonPayload>
          }
          aggregate: {
            args: Prisma.DragonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDragon>
          }
          groupBy: {
            args: Prisma.DragonGroupByArgs<ExtArgs>
            result: $Utils.Optional<DragonGroupByOutputType>[]
          }
          count: {
            args: Prisma.DragonCountArgs<ExtArgs>
            result: $Utils.Optional<DragonCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BattleCountOutputType
   */

  export type BattleCountOutputType = {
    dragons: number
  }

  export type BattleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dragons?: boolean | BattleCountOutputTypeCountDragonsArgs
  }

  // Custom InputTypes
  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BattleCountOutputType
     */
    select?: BattleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BattleCountOutputType without action
   */
  export type BattleCountOutputTypeCountDragonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DragonWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Battle
   */

  export type AggregateBattle = {
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  export type BattleAvgAggregateOutputType = {
    id: number | null
    winnerId: number | null
    winnerHealth: number | null
  }

  export type BattleSumAggregateOutputType = {
    id: number | null
    winnerId: number | null
    winnerHealth: number | null
  }

  export type BattleMinAggregateOutputType = {
    id: number | null
    winnerId: number | null
    winnerHealth: number | null
  }

  export type BattleMaxAggregateOutputType = {
    id: number | null
    winnerId: number | null
    winnerHealth: number | null
  }

  export type BattleCountAggregateOutputType = {
    id: number
    winnerId: number
    winnerHealth: number
    _all: number
  }


  export type BattleAvgAggregateInputType = {
    id?: true
    winnerId?: true
    winnerHealth?: true
  }

  export type BattleSumAggregateInputType = {
    id?: true
    winnerId?: true
    winnerHealth?: true
  }

  export type BattleMinAggregateInputType = {
    id?: true
    winnerId?: true
    winnerHealth?: true
  }

  export type BattleMaxAggregateInputType = {
    id?: true
    winnerId?: true
    winnerHealth?: true
  }

  export type BattleCountAggregateInputType = {
    id?: true
    winnerId?: true
    winnerHealth?: true
    _all?: true
  }

  export type BattleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battle to aggregate.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Battles
    **/
    _count?: true | BattleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BattleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BattleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BattleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BattleMaxAggregateInputType
  }

  export type GetBattleAggregateType<T extends BattleAggregateArgs> = {
        [P in keyof T & keyof AggregateBattle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBattle[P]>
      : GetScalarType<T[P], AggregateBattle[P]>
  }




  export type BattleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BattleWhereInput
    orderBy?: BattleOrderByWithAggregationInput | BattleOrderByWithAggregationInput[]
    by: BattleScalarFieldEnum[] | BattleScalarFieldEnum
    having?: BattleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BattleCountAggregateInputType | true
    _avg?: BattleAvgAggregateInputType
    _sum?: BattleSumAggregateInputType
    _min?: BattleMinAggregateInputType
    _max?: BattleMaxAggregateInputType
  }

  export type BattleGroupByOutputType = {
    id: number
    winnerId: number | null
    winnerHealth: number | null
    _count: BattleCountAggregateOutputType | null
    _avg: BattleAvgAggregateOutputType | null
    _sum: BattleSumAggregateOutputType | null
    _min: BattleMinAggregateOutputType | null
    _max: BattleMaxAggregateOutputType | null
  }

  type GetBattleGroupByPayload<T extends BattleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BattleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BattleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BattleGroupByOutputType[P]>
            : GetScalarType<T[P], BattleGroupByOutputType[P]>
        }
      >
    >


  export type BattleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winnerId?: boolean
    winnerHealth?: boolean
    dragons?: boolean | Battle$dragonsArgs<ExtArgs>
    _count?: boolean | BattleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    winnerId?: boolean
    winnerHealth?: boolean
  }, ExtArgs["result"]["battle"]>

  export type BattleSelectScalar = {
    id?: boolean
    winnerId?: boolean
    winnerHealth?: boolean
  }

  export type BattleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dragons?: boolean | Battle$dragonsArgs<ExtArgs>
    _count?: boolean | BattleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BattleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BattlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Battle"
    objects: {
      dragons: Prisma.$DragonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      winnerId: number | null
      winnerHealth: number | null
    }, ExtArgs["result"]["battle"]>
    composites: {}
  }

  type BattleGetPayload<S extends boolean | null | undefined | BattleDefaultArgs> = $Result.GetResult<Prisma.$BattlePayload, S>

  type BattleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BattleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BattleCountAggregateInputType | true
    }

  export interface BattleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Battle'], meta: { name: 'Battle' } }
    /**
     * Find zero or one Battle that matches the filter.
     * @param {BattleFindUniqueArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BattleFindUniqueArgs>(args: SelectSubset<T, BattleFindUniqueArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Battle that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BattleFindUniqueOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BattleFindUniqueOrThrowArgs>(args: SelectSubset<T, BattleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Battle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BattleFindFirstArgs>(args?: SelectSubset<T, BattleFindFirstArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Battle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindFirstOrThrowArgs} args - Arguments to find a Battle
     * @example
     * // Get one Battle
     * const battle = await prisma.battle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BattleFindFirstOrThrowArgs>(args?: SelectSubset<T, BattleFindFirstOrThrowArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Battles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Battles
     * const battles = await prisma.battle.findMany()
     * 
     * // Get first 10 Battles
     * const battles = await prisma.battle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const battleWithIdOnly = await prisma.battle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BattleFindManyArgs>(args?: SelectSubset<T, BattleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Battle.
     * @param {BattleCreateArgs} args - Arguments to create a Battle.
     * @example
     * // Create one Battle
     * const Battle = await prisma.battle.create({
     *   data: {
     *     // ... data to create a Battle
     *   }
     * })
     * 
     */
    create<T extends BattleCreateArgs>(args: SelectSubset<T, BattleCreateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Battles.
     * @param {BattleCreateManyArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BattleCreateManyArgs>(args?: SelectSubset<T, BattleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Battles and returns the data saved in the database.
     * @param {BattleCreateManyAndReturnArgs} args - Arguments to create many Battles.
     * @example
     * // Create many Battles
     * const battle = await prisma.battle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Battles and only return the `id`
     * const battleWithIdOnly = await prisma.battle.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BattleCreateManyAndReturnArgs>(args?: SelectSubset<T, BattleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Battle.
     * @param {BattleDeleteArgs} args - Arguments to delete one Battle.
     * @example
     * // Delete one Battle
     * const Battle = await prisma.battle.delete({
     *   where: {
     *     // ... filter to delete one Battle
     *   }
     * })
     * 
     */
    delete<T extends BattleDeleteArgs>(args: SelectSubset<T, BattleDeleteArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Battle.
     * @param {BattleUpdateArgs} args - Arguments to update one Battle.
     * @example
     * // Update one Battle
     * const battle = await prisma.battle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BattleUpdateArgs>(args: SelectSubset<T, BattleUpdateArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Battles.
     * @param {BattleDeleteManyArgs} args - Arguments to filter Battles to delete.
     * @example
     * // Delete a few Battles
     * const { count } = await prisma.battle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BattleDeleteManyArgs>(args?: SelectSubset<T, BattleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Battles
     * const battle = await prisma.battle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BattleUpdateManyArgs>(args: SelectSubset<T, BattleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Battle.
     * @param {BattleUpsertArgs} args - Arguments to update or create a Battle.
     * @example
     * // Update or create a Battle
     * const battle = await prisma.battle.upsert({
     *   create: {
     *     // ... data to create a Battle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Battle we want to update
     *   }
     * })
     */
    upsert<T extends BattleUpsertArgs>(args: SelectSubset<T, BattleUpsertArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Battles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleCountArgs} args - Arguments to filter Battles to count.
     * @example
     * // Count the number of Battles
     * const count = await prisma.battle.count({
     *   where: {
     *     // ... the filter for the Battles we want to count
     *   }
     * })
    **/
    count<T extends BattleCountArgs>(
      args?: Subset<T, BattleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BattleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BattleAggregateArgs>(args: Subset<T, BattleAggregateArgs>): Prisma.PrismaPromise<GetBattleAggregateType<T>>

    /**
     * Group by Battle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BattleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BattleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BattleGroupByArgs['orderBy'] }
        : { orderBy?: BattleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BattleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBattleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Battle model
   */
  readonly fields: BattleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Battle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BattleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dragons<T extends Battle$dragonsArgs<ExtArgs> = {}>(args?: Subset<T, Battle$dragonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Battle model
   */ 
  interface BattleFieldRefs {
    readonly id: FieldRef<"Battle", 'Int'>
    readonly winnerId: FieldRef<"Battle", 'Int'>
    readonly winnerHealth: FieldRef<"Battle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Battle findUnique
   */
  export type BattleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findUniqueOrThrow
   */
  export type BattleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle findFirst
   */
  export type BattleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findFirstOrThrow
   */
  export type BattleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battle to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Battles.
     */
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle findMany
   */
  export type BattleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter, which Battles to fetch.
     */
    where?: BattleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Battles to fetch.
     */
    orderBy?: BattleOrderByWithRelationInput | BattleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Battles.
     */
    cursor?: BattleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Battles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Battles.
     */
    skip?: number
    distinct?: BattleScalarFieldEnum | BattleScalarFieldEnum[]
  }

  /**
   * Battle create
   */
  export type BattleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to create a Battle.
     */
    data?: XOR<BattleCreateInput, BattleUncheckedCreateInput>
  }

  /**
   * Battle createMany
   */
  export type BattleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
  }

  /**
   * Battle createManyAndReturn
   */
  export type BattleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Battles.
     */
    data: BattleCreateManyInput | BattleCreateManyInput[]
  }

  /**
   * Battle update
   */
  export type BattleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The data needed to update a Battle.
     */
    data: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
    /**
     * Choose, which Battle to update.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle updateMany
   */
  export type BattleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Battles.
     */
    data: XOR<BattleUpdateManyMutationInput, BattleUncheckedUpdateManyInput>
    /**
     * Filter which Battles to update
     */
    where?: BattleWhereInput
  }

  /**
   * Battle upsert
   */
  export type BattleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * The filter to search for the Battle to update in case it exists.
     */
    where: BattleWhereUniqueInput
    /**
     * In case the Battle found by the `where` argument doesn't exist, create a new Battle with this data.
     */
    create: XOR<BattleCreateInput, BattleUncheckedCreateInput>
    /**
     * In case the Battle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BattleUpdateInput, BattleUncheckedUpdateInput>
  }

  /**
   * Battle delete
   */
  export type BattleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    /**
     * Filter which Battle to delete.
     */
    where: BattleWhereUniqueInput
  }

  /**
   * Battle deleteMany
   */
  export type BattleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Battles to delete
     */
    where?: BattleWhereInput
  }

  /**
   * Battle.dragons
   */
  export type Battle$dragonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    where?: DragonWhereInput
    orderBy?: DragonOrderByWithRelationInput | DragonOrderByWithRelationInput[]
    cursor?: DragonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DragonScalarFieldEnum | DragonScalarFieldEnum[]
  }

  /**
   * Battle without action
   */
  export type BattleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
  }


  /**
   * Model Dragon
   */

  export type AggregateDragon = {
    _count: DragonCountAggregateOutputType | null
    _avg: DragonAvgAggregateOutputType | null
    _sum: DragonSumAggregateOutputType | null
    _min: DragonMinAggregateOutputType | null
    _max: DragonMaxAggregateOutputType | null
  }

  export type DragonAvgAggregateOutputType = {
    id: number | null
    strength: number | null
    battleId: number | null
  }

  export type DragonSumAggregateOutputType = {
    id: number | null
    strength: number | null
    battleId: number | null
  }

  export type DragonMinAggregateOutputType = {
    id: number | null
    name: string | null
    strength: number | null
    battleId: number | null
  }

  export type DragonMaxAggregateOutputType = {
    id: number | null
    name: string | null
    strength: number | null
    battleId: number | null
  }

  export type DragonCountAggregateOutputType = {
    id: number
    name: number
    strength: number
    battleId: number
    _all: number
  }


  export type DragonAvgAggregateInputType = {
    id?: true
    strength?: true
    battleId?: true
  }

  export type DragonSumAggregateInputType = {
    id?: true
    strength?: true
    battleId?: true
  }

  export type DragonMinAggregateInputType = {
    id?: true
    name?: true
    strength?: true
    battleId?: true
  }

  export type DragonMaxAggregateInputType = {
    id?: true
    name?: true
    strength?: true
    battleId?: true
  }

  export type DragonCountAggregateInputType = {
    id?: true
    name?: true
    strength?: true
    battleId?: true
    _all?: true
  }

  export type DragonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dragon to aggregate.
     */
    where?: DragonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dragons to fetch.
     */
    orderBy?: DragonOrderByWithRelationInput | DragonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DragonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dragons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dragons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dragons
    **/
    _count?: true | DragonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DragonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DragonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DragonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DragonMaxAggregateInputType
  }

  export type GetDragonAggregateType<T extends DragonAggregateArgs> = {
        [P in keyof T & keyof AggregateDragon]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDragon[P]>
      : GetScalarType<T[P], AggregateDragon[P]>
  }




  export type DragonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DragonWhereInput
    orderBy?: DragonOrderByWithAggregationInput | DragonOrderByWithAggregationInput[]
    by: DragonScalarFieldEnum[] | DragonScalarFieldEnum
    having?: DragonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DragonCountAggregateInputType | true
    _avg?: DragonAvgAggregateInputType
    _sum?: DragonSumAggregateInputType
    _min?: DragonMinAggregateInputType
    _max?: DragonMaxAggregateInputType
  }

  export type DragonGroupByOutputType = {
    id: number
    name: string
    strength: number
    battleId: number | null
    _count: DragonCountAggregateOutputType | null
    _avg: DragonAvgAggregateOutputType | null
    _sum: DragonSumAggregateOutputType | null
    _min: DragonMinAggregateOutputType | null
    _max: DragonMaxAggregateOutputType | null
  }

  type GetDragonGroupByPayload<T extends DragonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DragonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DragonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DragonGroupByOutputType[P]>
            : GetScalarType<T[P], DragonGroupByOutputType[P]>
        }
      >
    >


  export type DragonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    strength?: boolean
    battleId?: boolean
    Battle?: boolean | Dragon$BattleArgs<ExtArgs>
  }, ExtArgs["result"]["dragon"]>

  export type DragonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    strength?: boolean
    battleId?: boolean
    Battle?: boolean | Dragon$BattleArgs<ExtArgs>
  }, ExtArgs["result"]["dragon"]>

  export type DragonSelectScalar = {
    id?: boolean
    name?: boolean
    strength?: boolean
    battleId?: boolean
  }

  export type DragonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Battle?: boolean | Dragon$BattleArgs<ExtArgs>
  }
  export type DragonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Battle?: boolean | Dragon$BattleArgs<ExtArgs>
  }

  export type $DragonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dragon"
    objects: {
      Battle: Prisma.$BattlePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      strength: number
      battleId: number | null
    }, ExtArgs["result"]["dragon"]>
    composites: {}
  }

  type DragonGetPayload<S extends boolean | null | undefined | DragonDefaultArgs> = $Result.GetResult<Prisma.$DragonPayload, S>

  type DragonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DragonFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DragonCountAggregateInputType | true
    }

  export interface DragonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dragon'], meta: { name: 'Dragon' } }
    /**
     * Find zero or one Dragon that matches the filter.
     * @param {DragonFindUniqueArgs} args - Arguments to find a Dragon
     * @example
     * // Get one Dragon
     * const dragon = await prisma.dragon.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DragonFindUniqueArgs>(args: SelectSubset<T, DragonFindUniqueArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dragon that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DragonFindUniqueOrThrowArgs} args - Arguments to find a Dragon
     * @example
     * // Get one Dragon
     * const dragon = await prisma.dragon.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DragonFindUniqueOrThrowArgs>(args: SelectSubset<T, DragonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dragon that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonFindFirstArgs} args - Arguments to find a Dragon
     * @example
     * // Get one Dragon
     * const dragon = await prisma.dragon.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DragonFindFirstArgs>(args?: SelectSubset<T, DragonFindFirstArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dragon that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonFindFirstOrThrowArgs} args - Arguments to find a Dragon
     * @example
     * // Get one Dragon
     * const dragon = await prisma.dragon.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DragonFindFirstOrThrowArgs>(args?: SelectSubset<T, DragonFindFirstOrThrowArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dragons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dragons
     * const dragons = await prisma.dragon.findMany()
     * 
     * // Get first 10 Dragons
     * const dragons = await prisma.dragon.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dragonWithIdOnly = await prisma.dragon.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DragonFindManyArgs>(args?: SelectSubset<T, DragonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dragon.
     * @param {DragonCreateArgs} args - Arguments to create a Dragon.
     * @example
     * // Create one Dragon
     * const Dragon = await prisma.dragon.create({
     *   data: {
     *     // ... data to create a Dragon
     *   }
     * })
     * 
     */
    create<T extends DragonCreateArgs>(args: SelectSubset<T, DragonCreateArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dragons.
     * @param {DragonCreateManyArgs} args - Arguments to create many Dragons.
     * @example
     * // Create many Dragons
     * const dragon = await prisma.dragon.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DragonCreateManyArgs>(args?: SelectSubset<T, DragonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dragons and returns the data saved in the database.
     * @param {DragonCreateManyAndReturnArgs} args - Arguments to create many Dragons.
     * @example
     * // Create many Dragons
     * const dragon = await prisma.dragon.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dragons and only return the `id`
     * const dragonWithIdOnly = await prisma.dragon.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DragonCreateManyAndReturnArgs>(args?: SelectSubset<T, DragonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dragon.
     * @param {DragonDeleteArgs} args - Arguments to delete one Dragon.
     * @example
     * // Delete one Dragon
     * const Dragon = await prisma.dragon.delete({
     *   where: {
     *     // ... filter to delete one Dragon
     *   }
     * })
     * 
     */
    delete<T extends DragonDeleteArgs>(args: SelectSubset<T, DragonDeleteArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dragon.
     * @param {DragonUpdateArgs} args - Arguments to update one Dragon.
     * @example
     * // Update one Dragon
     * const dragon = await prisma.dragon.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DragonUpdateArgs>(args: SelectSubset<T, DragonUpdateArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dragons.
     * @param {DragonDeleteManyArgs} args - Arguments to filter Dragons to delete.
     * @example
     * // Delete a few Dragons
     * const { count } = await prisma.dragon.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DragonDeleteManyArgs>(args?: SelectSubset<T, DragonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dragons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dragons
     * const dragon = await prisma.dragon.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DragonUpdateManyArgs>(args: SelectSubset<T, DragonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dragon.
     * @param {DragonUpsertArgs} args - Arguments to update or create a Dragon.
     * @example
     * // Update or create a Dragon
     * const dragon = await prisma.dragon.upsert({
     *   create: {
     *     // ... data to create a Dragon
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dragon we want to update
     *   }
     * })
     */
    upsert<T extends DragonUpsertArgs>(args: SelectSubset<T, DragonUpsertArgs<ExtArgs>>): Prisma__DragonClient<$Result.GetResult<Prisma.$DragonPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dragons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonCountArgs} args - Arguments to filter Dragons to count.
     * @example
     * // Count the number of Dragons
     * const count = await prisma.dragon.count({
     *   where: {
     *     // ... the filter for the Dragons we want to count
     *   }
     * })
    **/
    count<T extends DragonCountArgs>(
      args?: Subset<T, DragonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DragonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dragon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DragonAggregateArgs>(args: Subset<T, DragonAggregateArgs>): Prisma.PrismaPromise<GetDragonAggregateType<T>>

    /**
     * Group by Dragon.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DragonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DragonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DragonGroupByArgs['orderBy'] }
        : { orderBy?: DragonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DragonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDragonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dragon model
   */
  readonly fields: DragonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dragon.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DragonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Battle<T extends Dragon$BattleArgs<ExtArgs> = {}>(args?: Subset<T, Dragon$BattleArgs<ExtArgs>>): Prisma__BattleClient<$Result.GetResult<Prisma.$BattlePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dragon model
   */ 
  interface DragonFieldRefs {
    readonly id: FieldRef<"Dragon", 'Int'>
    readonly name: FieldRef<"Dragon", 'String'>
    readonly strength: FieldRef<"Dragon", 'Int'>
    readonly battleId: FieldRef<"Dragon", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Dragon findUnique
   */
  export type DragonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * Filter, which Dragon to fetch.
     */
    where: DragonWhereUniqueInput
  }

  /**
   * Dragon findUniqueOrThrow
   */
  export type DragonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * Filter, which Dragon to fetch.
     */
    where: DragonWhereUniqueInput
  }

  /**
   * Dragon findFirst
   */
  export type DragonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * Filter, which Dragon to fetch.
     */
    where?: DragonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dragons to fetch.
     */
    orderBy?: DragonOrderByWithRelationInput | DragonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dragons.
     */
    cursor?: DragonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dragons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dragons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dragons.
     */
    distinct?: DragonScalarFieldEnum | DragonScalarFieldEnum[]
  }

  /**
   * Dragon findFirstOrThrow
   */
  export type DragonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * Filter, which Dragon to fetch.
     */
    where?: DragonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dragons to fetch.
     */
    orderBy?: DragonOrderByWithRelationInput | DragonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dragons.
     */
    cursor?: DragonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dragons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dragons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dragons.
     */
    distinct?: DragonScalarFieldEnum | DragonScalarFieldEnum[]
  }

  /**
   * Dragon findMany
   */
  export type DragonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * Filter, which Dragons to fetch.
     */
    where?: DragonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dragons to fetch.
     */
    orderBy?: DragonOrderByWithRelationInput | DragonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dragons.
     */
    cursor?: DragonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dragons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dragons.
     */
    skip?: number
    distinct?: DragonScalarFieldEnum | DragonScalarFieldEnum[]
  }

  /**
   * Dragon create
   */
  export type DragonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * The data needed to create a Dragon.
     */
    data: XOR<DragonCreateInput, DragonUncheckedCreateInput>
  }

  /**
   * Dragon createMany
   */
  export type DragonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dragons.
     */
    data: DragonCreateManyInput | DragonCreateManyInput[]
  }

  /**
   * Dragon createManyAndReturn
   */
  export type DragonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Dragons.
     */
    data: DragonCreateManyInput | DragonCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dragon update
   */
  export type DragonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * The data needed to update a Dragon.
     */
    data: XOR<DragonUpdateInput, DragonUncheckedUpdateInput>
    /**
     * Choose, which Dragon to update.
     */
    where: DragonWhereUniqueInput
  }

  /**
   * Dragon updateMany
   */
  export type DragonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dragons.
     */
    data: XOR<DragonUpdateManyMutationInput, DragonUncheckedUpdateManyInput>
    /**
     * Filter which Dragons to update
     */
    where?: DragonWhereInput
  }

  /**
   * Dragon upsert
   */
  export type DragonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * The filter to search for the Dragon to update in case it exists.
     */
    where: DragonWhereUniqueInput
    /**
     * In case the Dragon found by the `where` argument doesn't exist, create a new Dragon with this data.
     */
    create: XOR<DragonCreateInput, DragonUncheckedCreateInput>
    /**
     * In case the Dragon was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DragonUpdateInput, DragonUncheckedUpdateInput>
  }

  /**
   * Dragon delete
   */
  export type DragonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
    /**
     * Filter which Dragon to delete.
     */
    where: DragonWhereUniqueInput
  }

  /**
   * Dragon deleteMany
   */
  export type DragonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dragons to delete
     */
    where?: DragonWhereInput
  }

  /**
   * Dragon.Battle
   */
  export type Dragon$BattleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Battle
     */
    select?: BattleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BattleInclude<ExtArgs> | null
    where?: BattleWhereInput
  }

  /**
   * Dragon without action
   */
  export type DragonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dragon
     */
    select?: DragonSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DragonInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BattleScalarFieldEnum: {
    id: 'id',
    winnerId: 'winnerId',
    winnerHealth: 'winnerHealth'
  };

  export type BattleScalarFieldEnum = (typeof BattleScalarFieldEnum)[keyof typeof BattleScalarFieldEnum]


  export const DragonScalarFieldEnum: {
    id: 'id',
    name: 'name',
    strength: 'strength',
    battleId: 'battleId'
  };

  export type DragonScalarFieldEnum = (typeof DragonScalarFieldEnum)[keyof typeof DragonScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BattleWhereInput = {
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    id?: IntFilter<"Battle"> | number
    winnerId?: IntNullableFilter<"Battle"> | number | null
    winnerHealth?: IntNullableFilter<"Battle"> | number | null
    dragons?: DragonListRelationFilter
  }

  export type BattleOrderByWithRelationInput = {
    id?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    winnerHealth?: SortOrderInput | SortOrder
    dragons?: DragonOrderByRelationAggregateInput
  }

  export type BattleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BattleWhereInput | BattleWhereInput[]
    OR?: BattleWhereInput[]
    NOT?: BattleWhereInput | BattleWhereInput[]
    winnerId?: IntNullableFilter<"Battle"> | number | null
    winnerHealth?: IntNullableFilter<"Battle"> | number | null
    dragons?: DragonListRelationFilter
  }, "id">

  export type BattleOrderByWithAggregationInput = {
    id?: SortOrder
    winnerId?: SortOrderInput | SortOrder
    winnerHealth?: SortOrderInput | SortOrder
    _count?: BattleCountOrderByAggregateInput
    _avg?: BattleAvgOrderByAggregateInput
    _max?: BattleMaxOrderByAggregateInput
    _min?: BattleMinOrderByAggregateInput
    _sum?: BattleSumOrderByAggregateInput
  }

  export type BattleScalarWhereWithAggregatesInput = {
    AND?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    OR?: BattleScalarWhereWithAggregatesInput[]
    NOT?: BattleScalarWhereWithAggregatesInput | BattleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Battle"> | number
    winnerId?: IntNullableWithAggregatesFilter<"Battle"> | number | null
    winnerHealth?: IntNullableWithAggregatesFilter<"Battle"> | number | null
  }

  export type DragonWhereInput = {
    AND?: DragonWhereInput | DragonWhereInput[]
    OR?: DragonWhereInput[]
    NOT?: DragonWhereInput | DragonWhereInput[]
    id?: IntFilter<"Dragon"> | number
    name?: StringFilter<"Dragon"> | string
    strength?: IntFilter<"Dragon"> | number
    battleId?: IntNullableFilter<"Dragon"> | number | null
    Battle?: XOR<BattleNullableRelationFilter, BattleWhereInput> | null
  }

  export type DragonOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    battleId?: SortOrderInput | SortOrder
    Battle?: BattleOrderByWithRelationInput
  }

  export type DragonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DragonWhereInput | DragonWhereInput[]
    OR?: DragonWhereInput[]
    NOT?: DragonWhereInput | DragonWhereInput[]
    name?: StringFilter<"Dragon"> | string
    strength?: IntFilter<"Dragon"> | number
    battleId?: IntNullableFilter<"Dragon"> | number | null
    Battle?: XOR<BattleNullableRelationFilter, BattleWhereInput> | null
  }, "id">

  export type DragonOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    battleId?: SortOrderInput | SortOrder
    _count?: DragonCountOrderByAggregateInput
    _avg?: DragonAvgOrderByAggregateInput
    _max?: DragonMaxOrderByAggregateInput
    _min?: DragonMinOrderByAggregateInput
    _sum?: DragonSumOrderByAggregateInput
  }

  export type DragonScalarWhereWithAggregatesInput = {
    AND?: DragonScalarWhereWithAggregatesInput | DragonScalarWhereWithAggregatesInput[]
    OR?: DragonScalarWhereWithAggregatesInput[]
    NOT?: DragonScalarWhereWithAggregatesInput | DragonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dragon"> | number
    name?: StringWithAggregatesFilter<"Dragon"> | string
    strength?: IntWithAggregatesFilter<"Dragon"> | number
    battleId?: IntNullableWithAggregatesFilter<"Dragon"> | number | null
  }

  export type BattleCreateInput = {
    winnerId?: number | null
    winnerHealth?: number | null
    dragons?: DragonCreateNestedManyWithoutBattleInput
  }

  export type BattleUncheckedCreateInput = {
    id?: number
    winnerId?: number | null
    winnerHealth?: number | null
    dragons?: DragonUncheckedCreateNestedManyWithoutBattleInput
  }

  export type BattleUpdateInput = {
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerHealth?: NullableIntFieldUpdateOperationsInput | number | null
    dragons?: DragonUpdateManyWithoutBattleNestedInput
  }

  export type BattleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerHealth?: NullableIntFieldUpdateOperationsInput | number | null
    dragons?: DragonUncheckedUpdateManyWithoutBattleNestedInput
  }

  export type BattleCreateManyInput = {
    id?: number
    winnerId?: number | null
    winnerHealth?: number | null
  }

  export type BattleUpdateManyMutationInput = {
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerHealth?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BattleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerHealth?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DragonCreateInput = {
    name: string
    strength: number
    Battle?: BattleCreateNestedOneWithoutDragonsInput
  }

  export type DragonUncheckedCreateInput = {
    id?: number
    name: string
    strength: number
    battleId?: number | null
  }

  export type DragonUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    Battle?: BattleUpdateOneWithoutDragonsNestedInput
  }

  export type DragonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    battleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DragonCreateManyInput = {
    id?: number
    name: string
    strength: number
    battleId?: number | null
  }

  export type DragonUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
  }

  export type DragonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
    battleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DragonListRelationFilter = {
    every?: DragonWhereInput
    some?: DragonWhereInput
    none?: DragonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DragonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BattleCountOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    winnerHealth?: SortOrder
  }

  export type BattleAvgOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    winnerHealth?: SortOrder
  }

  export type BattleMaxOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    winnerHealth?: SortOrder
  }

  export type BattleMinOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    winnerHealth?: SortOrder
  }

  export type BattleSumOrderByAggregateInput = {
    id?: SortOrder
    winnerId?: SortOrder
    winnerHealth?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BattleNullableRelationFilter = {
    is?: BattleWhereInput | null
    isNot?: BattleWhereInput | null
  }

  export type DragonCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    battleId?: SortOrder
  }

  export type DragonAvgOrderByAggregateInput = {
    id?: SortOrder
    strength?: SortOrder
    battleId?: SortOrder
  }

  export type DragonMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    battleId?: SortOrder
  }

  export type DragonMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    strength?: SortOrder
    battleId?: SortOrder
  }

  export type DragonSumOrderByAggregateInput = {
    id?: SortOrder
    strength?: SortOrder
    battleId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DragonCreateNestedManyWithoutBattleInput = {
    create?: XOR<DragonCreateWithoutBattleInput, DragonUncheckedCreateWithoutBattleInput> | DragonCreateWithoutBattleInput[] | DragonUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: DragonCreateOrConnectWithoutBattleInput | DragonCreateOrConnectWithoutBattleInput[]
    createMany?: DragonCreateManyBattleInputEnvelope
    connect?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
  }

  export type DragonUncheckedCreateNestedManyWithoutBattleInput = {
    create?: XOR<DragonCreateWithoutBattleInput, DragonUncheckedCreateWithoutBattleInput> | DragonCreateWithoutBattleInput[] | DragonUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: DragonCreateOrConnectWithoutBattleInput | DragonCreateOrConnectWithoutBattleInput[]
    createMany?: DragonCreateManyBattleInputEnvelope
    connect?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DragonUpdateManyWithoutBattleNestedInput = {
    create?: XOR<DragonCreateWithoutBattleInput, DragonUncheckedCreateWithoutBattleInput> | DragonCreateWithoutBattleInput[] | DragonUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: DragonCreateOrConnectWithoutBattleInput | DragonCreateOrConnectWithoutBattleInput[]
    upsert?: DragonUpsertWithWhereUniqueWithoutBattleInput | DragonUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: DragonCreateManyBattleInputEnvelope
    set?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    disconnect?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    delete?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    connect?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    update?: DragonUpdateWithWhereUniqueWithoutBattleInput | DragonUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: DragonUpdateManyWithWhereWithoutBattleInput | DragonUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: DragonScalarWhereInput | DragonScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DragonUncheckedUpdateManyWithoutBattleNestedInput = {
    create?: XOR<DragonCreateWithoutBattleInput, DragonUncheckedCreateWithoutBattleInput> | DragonCreateWithoutBattleInput[] | DragonUncheckedCreateWithoutBattleInput[]
    connectOrCreate?: DragonCreateOrConnectWithoutBattleInput | DragonCreateOrConnectWithoutBattleInput[]
    upsert?: DragonUpsertWithWhereUniqueWithoutBattleInput | DragonUpsertWithWhereUniqueWithoutBattleInput[]
    createMany?: DragonCreateManyBattleInputEnvelope
    set?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    disconnect?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    delete?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    connect?: DragonWhereUniqueInput | DragonWhereUniqueInput[]
    update?: DragonUpdateWithWhereUniqueWithoutBattleInput | DragonUpdateWithWhereUniqueWithoutBattleInput[]
    updateMany?: DragonUpdateManyWithWhereWithoutBattleInput | DragonUpdateManyWithWhereWithoutBattleInput[]
    deleteMany?: DragonScalarWhereInput | DragonScalarWhereInput[]
  }

  export type BattleCreateNestedOneWithoutDragonsInput = {
    create?: XOR<BattleCreateWithoutDragonsInput, BattleUncheckedCreateWithoutDragonsInput>
    connectOrCreate?: BattleCreateOrConnectWithoutDragonsInput
    connect?: BattleWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BattleUpdateOneWithoutDragonsNestedInput = {
    create?: XOR<BattleCreateWithoutDragonsInput, BattleUncheckedCreateWithoutDragonsInput>
    connectOrCreate?: BattleCreateOrConnectWithoutDragonsInput
    upsert?: BattleUpsertWithoutDragonsInput
    disconnect?: BattleWhereInput | boolean
    delete?: BattleWhereInput | boolean
    connect?: BattleWhereUniqueInput
    update?: XOR<XOR<BattleUpdateToOneWithWhereWithoutDragonsInput, BattleUpdateWithoutDragonsInput>, BattleUncheckedUpdateWithoutDragonsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DragonCreateWithoutBattleInput = {
    name: string
    strength: number
  }

  export type DragonUncheckedCreateWithoutBattleInput = {
    id?: number
    name: string
    strength: number
  }

  export type DragonCreateOrConnectWithoutBattleInput = {
    where: DragonWhereUniqueInput
    create: XOR<DragonCreateWithoutBattleInput, DragonUncheckedCreateWithoutBattleInput>
  }

  export type DragonCreateManyBattleInputEnvelope = {
    data: DragonCreateManyBattleInput | DragonCreateManyBattleInput[]
  }

  export type DragonUpsertWithWhereUniqueWithoutBattleInput = {
    where: DragonWhereUniqueInput
    update: XOR<DragonUpdateWithoutBattleInput, DragonUncheckedUpdateWithoutBattleInput>
    create: XOR<DragonCreateWithoutBattleInput, DragonUncheckedCreateWithoutBattleInput>
  }

  export type DragonUpdateWithWhereUniqueWithoutBattleInput = {
    where: DragonWhereUniqueInput
    data: XOR<DragonUpdateWithoutBattleInput, DragonUncheckedUpdateWithoutBattleInput>
  }

  export type DragonUpdateManyWithWhereWithoutBattleInput = {
    where: DragonScalarWhereInput
    data: XOR<DragonUpdateManyMutationInput, DragonUncheckedUpdateManyWithoutBattleInput>
  }

  export type DragonScalarWhereInput = {
    AND?: DragonScalarWhereInput | DragonScalarWhereInput[]
    OR?: DragonScalarWhereInput[]
    NOT?: DragonScalarWhereInput | DragonScalarWhereInput[]
    id?: IntFilter<"Dragon"> | number
    name?: StringFilter<"Dragon"> | string
    strength?: IntFilter<"Dragon"> | number
    battleId?: IntNullableFilter<"Dragon"> | number | null
  }

  export type BattleCreateWithoutDragonsInput = {
    winnerId?: number | null
    winnerHealth?: number | null
  }

  export type BattleUncheckedCreateWithoutDragonsInput = {
    id?: number
    winnerId?: number | null
    winnerHealth?: number | null
  }

  export type BattleCreateOrConnectWithoutDragonsInput = {
    where: BattleWhereUniqueInput
    create: XOR<BattleCreateWithoutDragonsInput, BattleUncheckedCreateWithoutDragonsInput>
  }

  export type BattleUpsertWithoutDragonsInput = {
    update: XOR<BattleUpdateWithoutDragonsInput, BattleUncheckedUpdateWithoutDragonsInput>
    create: XOR<BattleCreateWithoutDragonsInput, BattleUncheckedCreateWithoutDragonsInput>
    where?: BattleWhereInput
  }

  export type BattleUpdateToOneWithWhereWithoutDragonsInput = {
    where?: BattleWhereInput
    data: XOR<BattleUpdateWithoutDragonsInput, BattleUncheckedUpdateWithoutDragonsInput>
  }

  export type BattleUpdateWithoutDragonsInput = {
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerHealth?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BattleUncheckedUpdateWithoutDragonsInput = {
    id?: IntFieldUpdateOperationsInput | number
    winnerId?: NullableIntFieldUpdateOperationsInput | number | null
    winnerHealth?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DragonCreateManyBattleInput = {
    id?: number
    name: string
    strength: number
  }

  export type DragonUpdateWithoutBattleInput = {
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
  }

  export type DragonUncheckedUpdateWithoutBattleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
  }

  export type DragonUncheckedUpdateManyWithoutBattleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    strength?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use BattleCountOutputTypeDefaultArgs instead
     */
    export type BattleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BattleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BattleDefaultArgs instead
     */
    export type BattleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BattleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DragonDefaultArgs instead
     */
    export type DragonArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DragonDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}