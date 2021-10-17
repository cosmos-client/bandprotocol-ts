import * as $protobuf from "protobufjs";
/** Namespace oracle. */
export namespace oracle {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a DataSource. */
        interface IDataSource {

            /** DataSource owner */
            owner?: (string|null);

            /** DataSource name */
            name?: (string|null);

            /** DataSource description */
            description?: (string|null);

            /** DataSource filename */
            filename?: (string|null);

            /** DataSource treasury */
            treasury?: (string|null);

            /** DataSource fee */
            fee?: (cosmos.base.v1beta1.ICoin[]|null);
        }

        /** Represents a DataSource. */
        class DataSource implements IDataSource {

            /**
             * Constructs a new DataSource.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IDataSource);

            /** DataSource owner. */
            public owner: string;

            /** DataSource name. */
            public name: string;

            /** DataSource description. */
            public description: string;

            /** DataSource filename. */
            public filename: string;

            /** DataSource treasury. */
            public treasury: string;

            /** DataSource fee. */
            public fee: cosmos.base.v1beta1.ICoin[];

            /**
             * Encodes the specified DataSource message. Does not implicitly {@link oracle.v1.DataSource.verify|verify} messages.
             * @param message DataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DataSource message, length delimited. Does not implicitly {@link oracle.v1.DataSource.verify|verify} messages.
             * @param message DataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DataSource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.DataSource;

            /**
             * Decodes a DataSource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.DataSource;

            /**
             * Verifies a DataSource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DataSource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DataSource
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.DataSource;

            /**
             * Creates a plain object from a DataSource message. Also converts values to other types if specified.
             * @param message DataSource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.DataSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DataSource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OracleScript. */
        interface IOracleScript {

            /** OracleScript owner */
            owner?: (string|null);

            /** OracleScript name */
            name?: (string|null);

            /** OracleScript description */
            description?: (string|null);

            /** OracleScript filename */
            filename?: (string|null);

            /** OracleScript schema */
            schema?: (string|null);

            /** OracleScript source_code_url */
            source_code_url?: (string|null);
        }

        /** Represents an OracleScript. */
        class OracleScript implements IOracleScript {

            /**
             * Constructs a new OracleScript.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IOracleScript);

            /** OracleScript owner. */
            public owner: string;

            /** OracleScript name. */
            public name: string;

            /** OracleScript description. */
            public description: string;

            /** OracleScript filename. */
            public filename: string;

            /** OracleScript schema. */
            public schema: string;

            /** OracleScript source_code_url. */
            public source_code_url: string;

            /**
             * Encodes the specified OracleScript message. Does not implicitly {@link oracle.v1.OracleScript.verify|verify} messages.
             * @param message OracleScript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IOracleScript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OracleScript message, length delimited. Does not implicitly {@link oracle.v1.OracleScript.verify|verify} messages.
             * @param message OracleScript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IOracleScript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OracleScript message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OracleScript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.OracleScript;

            /**
             * Decodes an OracleScript message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OracleScript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.OracleScript;

            /**
             * Verifies an OracleScript message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OracleScript message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OracleScript
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.OracleScript;

            /**
             * Creates a plain object from an OracleScript message. Also converts values to other types if specified.
             * @param message OracleScript
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.OracleScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OracleScript to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RawRequest. */
        interface IRawRequest {

            /** RawRequest external_id */
            external_id?: (Long|null);

            /** RawRequest data_source_id */
            data_source_id?: (Long|null);

            /** RawRequest calldata */
            calldata?: (Uint8Array|null);
        }

        /** Represents a RawRequest. */
        class RawRequest implements IRawRequest {

            /**
             * Constructs a new RawRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IRawRequest);

            /** RawRequest external_id. */
            public external_id: Long;

            /** RawRequest data_source_id. */
            public data_source_id: Long;

            /** RawRequest calldata. */
            public calldata: Uint8Array;

            /**
             * Encodes the specified RawRequest message. Does not implicitly {@link oracle.v1.RawRequest.verify|verify} messages.
             * @param message RawRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IRawRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RawRequest message, length delimited. Does not implicitly {@link oracle.v1.RawRequest.verify|verify} messages.
             * @param message RawRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IRawRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RawRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RawRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.RawRequest;

            /**
             * Decodes a RawRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RawRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.RawRequest;

            /**
             * Verifies a RawRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RawRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RawRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.RawRequest;

            /**
             * Creates a plain object from a RawRequest message. Also converts values to other types if specified.
             * @param message RawRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.RawRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RawRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RawReport. */
        interface IRawReport {

            /** RawReport external_id */
            external_id?: (Long|null);

            /** RawReport exit_code */
            exit_code?: (number|null);

            /** RawReport data */
            data?: (Uint8Array|null);
        }

        /** Represents a RawReport. */
        class RawReport implements IRawReport {

            /**
             * Constructs a new RawReport.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IRawReport);

            /** RawReport external_id. */
            public external_id: Long;

            /** RawReport exit_code. */
            public exit_code: number;

            /** RawReport data. */
            public data: Uint8Array;

            /**
             * Encodes the specified RawReport message. Does not implicitly {@link oracle.v1.RawReport.verify|verify} messages.
             * @param message RawReport message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IRawReport, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RawReport message, length delimited. Does not implicitly {@link oracle.v1.RawReport.verify|verify} messages.
             * @param message RawReport message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IRawReport, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RawReport message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RawReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.RawReport;

            /**
             * Decodes a RawReport message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RawReport
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.RawReport;

            /**
             * Verifies a RawReport message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RawReport message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RawReport
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.RawReport;

            /**
             * Creates a plain object from a RawReport message. Also converts values to other types if specified.
             * @param message RawReport
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.RawReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RawReport to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Request. */
        interface IRequest {

            /** Request oracle_script_id */
            oracle_script_id?: (Long|null);

            /** Request calldata */
            calldata?: (Uint8Array|null);

            /** Request requested_validators */
            requested_validators?: (string[]|null);

            /** Request min_count */
            min_count?: (Long|null);

            /** Request request_height */
            request_height?: (Long|null);

            /** Request request_time */
            request_time?: (Long|null);

            /** Request client_id */
            client_id?: (string|null);

            /** Request raw_requests */
            raw_requests?: (oracle.v1.IRawRequest[]|null);

            /** Request ibc_channel */
            ibc_channel?: (oracle.v1.IIBCChannel|null);

            /** Request execute_gas */
            execute_gas?: (Long|null);
        }

        /** Represents a Request. */
        class Request implements IRequest {

            /**
             * Constructs a new Request.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IRequest);

            /** Request oracle_script_id. */
            public oracle_script_id: Long;

            /** Request calldata. */
            public calldata: Uint8Array;

            /** Request requested_validators. */
            public requested_validators: string[];

            /** Request min_count. */
            public min_count: Long;

            /** Request request_height. */
            public request_height: Long;

            /** Request request_time. */
            public request_time: Long;

            /** Request client_id. */
            public client_id: string;

            /** Request raw_requests. */
            public raw_requests: oracle.v1.IRawRequest[];

            /** Request ibc_channel. */
            public ibc_channel?: (oracle.v1.IIBCChannel|null);

            /** Request execute_gas. */
            public execute_gas: Long;

            /**
             * Encodes the specified Request message. Does not implicitly {@link oracle.v1.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Request message, length delimited. Does not implicitly {@link oracle.v1.Request.verify|verify} messages.
             * @param message Request message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Request message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.Request;

            /**
             * Decodes a Request message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Request
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.Request;

            /**
             * Verifies a Request message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Request message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Request
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.Request;

            /**
             * Creates a plain object from a Request message. Also converts values to other types if specified.
             * @param message Request
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Request to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Report. */
        interface IReport {

            /** Report validator */
            validator?: (string|null);

            /** Report in_before_resolve */
            in_before_resolve?: (boolean|null);

            /** Report raw_reports */
            raw_reports?: (oracle.v1.IRawReport[]|null);
        }

        /** Represents a Report. */
        class Report implements IReport {

            /**
             * Constructs a new Report.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IReport);

            /** Report validator. */
            public validator: string;

            /** Report in_before_resolve. */
            public in_before_resolve: boolean;

            /** Report raw_reports. */
            public raw_reports: oracle.v1.IRawReport[];

            /**
             * Encodes the specified Report message. Does not implicitly {@link oracle.v1.Report.verify|verify} messages.
             * @param message Report message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IReport, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Report message, length delimited. Does not implicitly {@link oracle.v1.Report.verify|verify} messages.
             * @param message Report message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IReport, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Report message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Report
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.Report;

            /**
             * Decodes a Report message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Report
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.Report;

            /**
             * Verifies a Report message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Report message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Report
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.Report;

            /**
             * Creates a plain object from a Report message. Also converts values to other types if specified.
             * @param message Report
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.Report, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Report to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** ResolveStatus enum. */
        enum ResolveStatus {
            RESOLVE_STATUS_OPEN_UNSPECIFIED = 0,
            RESOLVE_STATUS_SUCCESS = 1,
            RESOLVE_STATUS_FAILURE = 2,
            RESOLVE_STATUS_EXPIRED = 3
        }

        /** Properties of an OracleRequestPacketData. */
        interface IOracleRequestPacketData {

            /** OracleRequestPacketData client_id */
            client_id?: (string|null);

            /** OracleRequestPacketData oracle_script_id */
            oracle_script_id?: (Long|null);

            /** OracleRequestPacketData calldata */
            calldata?: (Uint8Array|null);

            /** OracleRequestPacketData ask_count */
            ask_count?: (Long|null);

            /** OracleRequestPacketData min_count */
            min_count?: (Long|null);

            /** OracleRequestPacketData fee_limit */
            fee_limit?: (cosmos.base.v1beta1.ICoin[]|null);

            /** OracleRequestPacketData prepare_gas */
            prepare_gas?: (Long|null);

            /** OracleRequestPacketData execute_gas */
            execute_gas?: (Long|null);
        }

        /** Represents an OracleRequestPacketData. */
        class OracleRequestPacketData implements IOracleRequestPacketData {

            /**
             * Constructs a new OracleRequestPacketData.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IOracleRequestPacketData);

            /** OracleRequestPacketData client_id. */
            public client_id: string;

            /** OracleRequestPacketData oracle_script_id. */
            public oracle_script_id: Long;

            /** OracleRequestPacketData calldata. */
            public calldata: Uint8Array;

            /** OracleRequestPacketData ask_count. */
            public ask_count: Long;

            /** OracleRequestPacketData min_count. */
            public min_count: Long;

            /** OracleRequestPacketData fee_limit. */
            public fee_limit: cosmos.base.v1beta1.ICoin[];

            /** OracleRequestPacketData prepare_gas. */
            public prepare_gas: Long;

            /** OracleRequestPacketData execute_gas. */
            public execute_gas: Long;

            /**
             * Encodes the specified OracleRequestPacketData message. Does not implicitly {@link oracle.v1.OracleRequestPacketData.verify|verify} messages.
             * @param message OracleRequestPacketData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IOracleRequestPacketData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OracleRequestPacketData message, length delimited. Does not implicitly {@link oracle.v1.OracleRequestPacketData.verify|verify} messages.
             * @param message OracleRequestPacketData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IOracleRequestPacketData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OracleRequestPacketData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OracleRequestPacketData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.OracleRequestPacketData;

            /**
             * Decodes an OracleRequestPacketData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OracleRequestPacketData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.OracleRequestPacketData;

            /**
             * Verifies an OracleRequestPacketData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OracleRequestPacketData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OracleRequestPacketData
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.OracleRequestPacketData;

            /**
             * Creates a plain object from an OracleRequestPacketData message. Also converts values to other types if specified.
             * @param message OracleRequestPacketData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.OracleRequestPacketData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OracleRequestPacketData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OracleRequestPacketAcknowledgement. */
        interface IOracleRequestPacketAcknowledgement {

            /** OracleRequestPacketAcknowledgement request_id */
            request_id?: (Long|null);
        }

        /** Represents an OracleRequestPacketAcknowledgement. */
        class OracleRequestPacketAcknowledgement implements IOracleRequestPacketAcknowledgement {

            /**
             * Constructs a new OracleRequestPacketAcknowledgement.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IOracleRequestPacketAcknowledgement);

            /** OracleRequestPacketAcknowledgement request_id. */
            public request_id: Long;

            /**
             * Encodes the specified OracleRequestPacketAcknowledgement message. Does not implicitly {@link oracle.v1.OracleRequestPacketAcknowledgement.verify|verify} messages.
             * @param message OracleRequestPacketAcknowledgement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IOracleRequestPacketAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OracleRequestPacketAcknowledgement message, length delimited. Does not implicitly {@link oracle.v1.OracleRequestPacketAcknowledgement.verify|verify} messages.
             * @param message OracleRequestPacketAcknowledgement message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IOracleRequestPacketAcknowledgement, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OracleRequestPacketAcknowledgement message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OracleRequestPacketAcknowledgement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.OracleRequestPacketAcknowledgement;

            /**
             * Decodes an OracleRequestPacketAcknowledgement message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OracleRequestPacketAcknowledgement
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.OracleRequestPacketAcknowledgement;

            /**
             * Verifies an OracleRequestPacketAcknowledgement message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OracleRequestPacketAcknowledgement message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OracleRequestPacketAcknowledgement
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.OracleRequestPacketAcknowledgement;

            /**
             * Creates a plain object from an OracleRequestPacketAcknowledgement message. Also converts values to other types if specified.
             * @param message OracleRequestPacketAcknowledgement
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.OracleRequestPacketAcknowledgement, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OracleRequestPacketAcknowledgement to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OracleResponsePacketData. */
        interface IOracleResponsePacketData {

            /** OracleResponsePacketData client_id */
            client_id?: (string|null);

            /** OracleResponsePacketData request_id */
            request_id?: (Long|null);

            /** OracleResponsePacketData ans_count */
            ans_count?: (Long|null);

            /** OracleResponsePacketData request_time */
            request_time?: (Long|null);

            /** OracleResponsePacketData resolve_time */
            resolve_time?: (Long|null);

            /** OracleResponsePacketData resolve_status */
            resolve_status?: (oracle.v1.ResolveStatus|null);

            /** OracleResponsePacketData result */
            result?: (Uint8Array|null);
        }

        /** Represents an OracleResponsePacketData. */
        class OracleResponsePacketData implements IOracleResponsePacketData {

            /**
             * Constructs a new OracleResponsePacketData.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IOracleResponsePacketData);

            /** OracleResponsePacketData client_id. */
            public client_id: string;

            /** OracleResponsePacketData request_id. */
            public request_id: Long;

            /** OracleResponsePacketData ans_count. */
            public ans_count: Long;

            /** OracleResponsePacketData request_time. */
            public request_time: Long;

            /** OracleResponsePacketData resolve_time. */
            public resolve_time: Long;

            /** OracleResponsePacketData resolve_status. */
            public resolve_status: oracle.v1.ResolveStatus;

            /** OracleResponsePacketData result. */
            public result: Uint8Array;

            /**
             * Encodes the specified OracleResponsePacketData message. Does not implicitly {@link oracle.v1.OracleResponsePacketData.verify|verify} messages.
             * @param message OracleResponsePacketData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IOracleResponsePacketData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OracleResponsePacketData message, length delimited. Does not implicitly {@link oracle.v1.OracleResponsePacketData.verify|verify} messages.
             * @param message OracleResponsePacketData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IOracleResponsePacketData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OracleResponsePacketData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OracleResponsePacketData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.OracleResponsePacketData;

            /**
             * Decodes an OracleResponsePacketData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OracleResponsePacketData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.OracleResponsePacketData;

            /**
             * Verifies an OracleResponsePacketData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OracleResponsePacketData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OracleResponsePacketData
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.OracleResponsePacketData;

            /**
             * Creates a plain object from an OracleResponsePacketData message. Also converts values to other types if specified.
             * @param message OracleResponsePacketData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.OracleResponsePacketData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OracleResponsePacketData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Result. */
        interface IResult {

            /** Result client_id */
            client_id?: (string|null);

            /** Result oracle_script_id */
            oracle_script_id?: (Long|null);

            /** Result calldata */
            calldata?: (Uint8Array|null);

            /** Result ask_count */
            ask_count?: (Long|null);

            /** Result min_count */
            min_count?: (Long|null);

            /** Result request_id */
            request_id?: (Long|null);

            /** Result ans_count */
            ans_count?: (Long|null);

            /** Result request_time */
            request_time?: (Long|null);

            /** Result resolve_time */
            resolve_time?: (Long|null);

            /** Result resolve_status */
            resolve_status?: (oracle.v1.ResolveStatus|null);

            /** Result result */
            result?: (Uint8Array|null);
        }

        /** Represents a Result. */
        class Result implements IResult {

            /**
             * Constructs a new Result.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IResult);

            /** Result client_id. */
            public client_id: string;

            /** Result oracle_script_id. */
            public oracle_script_id: Long;

            /** Result calldata. */
            public calldata: Uint8Array;

            /** Result ask_count. */
            public ask_count: Long;

            /** Result min_count. */
            public min_count: Long;

            /** Result request_id. */
            public request_id: Long;

            /** Result ans_count. */
            public ans_count: Long;

            /** Result request_time. */
            public request_time: Long;

            /** Result resolve_time. */
            public resolve_time: Long;

            /** Result resolve_status. */
            public resolve_status: oracle.v1.ResolveStatus;

            /** Result result. */
            public result: Uint8Array;

            /**
             * Encodes the specified Result message. Does not implicitly {@link oracle.v1.Result.verify|verify} messages.
             * @param message Result message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Result message, length delimited. Does not implicitly {@link oracle.v1.Result.verify|verify} messages.
             * @param message Result message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Result message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.Result;

            /**
             * Decodes a Result message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Result
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.Result;

            /**
             * Verifies a Result message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Result message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Result
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.Result;

            /**
             * Creates a plain object from a Result message. Also converts values to other types if specified.
             * @param message Result
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Result to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ValidatorStatus. */
        interface IValidatorStatus {

            /** ValidatorStatus is_active */
            is_active?: (boolean|null);

            /** ValidatorStatus since */
            since?: (google.protobuf.ITimestamp|null);
        }

        /** Represents a ValidatorStatus. */
        class ValidatorStatus implements IValidatorStatus {

            /**
             * Constructs a new ValidatorStatus.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IValidatorStatus);

            /** ValidatorStatus is_active. */
            public is_active: boolean;

            /** ValidatorStatus since. */
            public since?: (google.protobuf.ITimestamp|null);

            /**
             * Encodes the specified ValidatorStatus message. Does not implicitly {@link oracle.v1.ValidatorStatus.verify|verify} messages.
             * @param message ValidatorStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IValidatorStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ValidatorStatus message, length delimited. Does not implicitly {@link oracle.v1.ValidatorStatus.verify|verify} messages.
             * @param message ValidatorStatus message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IValidatorStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ValidatorStatus message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ValidatorStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.ValidatorStatus;

            /**
             * Decodes a ValidatorStatus message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ValidatorStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.ValidatorStatus;

            /**
             * Verifies a ValidatorStatus message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ValidatorStatus message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ValidatorStatus
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.ValidatorStatus;

            /**
             * Creates a plain object from a ValidatorStatus message. Also converts values to other types if specified.
             * @param message ValidatorStatus
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.ValidatorStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ValidatorStatus to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an ActiveValidator. */
        interface IActiveValidator {

            /** ActiveValidator address */
            address?: (string|null);

            /** ActiveValidator power */
            power?: (Long|null);
        }

        /** Represents an ActiveValidator. */
        class ActiveValidator implements IActiveValidator {

            /**
             * Constructs a new ActiveValidator.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IActiveValidator);

            /** ActiveValidator address. */
            public address: string;

            /** ActiveValidator power. */
            public power: Long;

            /**
             * Encodes the specified ActiveValidator message. Does not implicitly {@link oracle.v1.ActiveValidator.verify|verify} messages.
             * @param message ActiveValidator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IActiveValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ActiveValidator message, length delimited. Does not implicitly {@link oracle.v1.ActiveValidator.verify|verify} messages.
             * @param message ActiveValidator message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IActiveValidator, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ActiveValidator message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ActiveValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.ActiveValidator;

            /**
             * Decodes an ActiveValidator message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ActiveValidator
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.ActiveValidator;

            /**
             * Verifies an ActiveValidator message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ActiveValidator message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ActiveValidator
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.ActiveValidator;

            /**
             * Creates a plain object from an ActiveValidator message. Also converts values to other types if specified.
             * @param message ActiveValidator
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.ActiveValidator, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ActiveValidator to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Params. */
        interface IParams {

            /** Params max_raw_request_count */
            max_raw_request_count?: (Long|null);

            /** Params max_ask_count */
            max_ask_count?: (Long|null);

            /** Params max_calldata_size */
            max_calldata_size?: (Long|null);

            /** Params max_report_data_size */
            max_report_data_size?: (Long|null);

            /** Params expiration_block_count */
            expiration_block_count?: (Long|null);

            /** Params base_owasm_gas */
            base_owasm_gas?: (Long|null);

            /** Params per_validator_request_gas */
            per_validator_request_gas?: (Long|null);

            /** Params sampling_try_count */
            sampling_try_count?: (Long|null);

            /** Params oracle_reward_percentage */
            oracle_reward_percentage?: (Long|null);

            /** Params inactive_penalty_duration */
            inactive_penalty_duration?: (Long|null);

            /** Params ibc_request_enabled */
            ibc_request_enabled?: (boolean|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IParams);

            /** Params max_raw_request_count. */
            public max_raw_request_count: Long;

            /** Params max_ask_count. */
            public max_ask_count: Long;

            /** Params max_calldata_size. */
            public max_calldata_size: Long;

            /** Params max_report_data_size. */
            public max_report_data_size: Long;

            /** Params expiration_block_count. */
            public expiration_block_count: Long;

            /** Params base_owasm_gas. */
            public base_owasm_gas: Long;

            /** Params per_validator_request_gas. */
            public per_validator_request_gas: Long;

            /** Params sampling_try_count. */
            public sampling_try_count: Long;

            /** Params oracle_reward_percentage. */
            public oracle_reward_percentage: Long;

            /** Params inactive_penalty_duration. */
            public inactive_penalty_duration: Long;

            /** Params ibc_request_enabled. */
            public ibc_request_enabled: boolean;

            /**
             * Encodes the specified Params message. Does not implicitly {@link oracle.v1.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link oracle.v1.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PendingResolveList. */
        interface IPendingResolveList {

            /** PendingResolveList request_ids */
            request_ids?: (Long[]|null);
        }

        /** Represents a PendingResolveList. */
        class PendingResolveList implements IPendingResolveList {

            /**
             * Constructs a new PendingResolveList.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IPendingResolveList);

            /** PendingResolveList request_ids. */
            public request_ids: Long[];

            /**
             * Encodes the specified PendingResolveList message. Does not implicitly {@link oracle.v1.PendingResolveList.verify|verify} messages.
             * @param message PendingResolveList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IPendingResolveList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingResolveList message, length delimited. Does not implicitly {@link oracle.v1.PendingResolveList.verify|verify} messages.
             * @param message PendingResolveList message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IPendingResolveList, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingResolveList message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingResolveList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.PendingResolveList;

            /**
             * Decodes a PendingResolveList message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingResolveList
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.PendingResolveList;

            /**
             * Verifies a PendingResolveList message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingResolveList message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingResolveList
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.PendingResolveList;

            /**
             * Creates a plain object from a PendingResolveList message. Also converts values to other types if specified.
             * @param message PendingResolveList
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.PendingResolveList, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingResolveList to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a IBCChannel. */
        interface IIBCChannel {

            /** IBCChannel port_id */
            port_id?: (string|null);

            /** IBCChannel channel_id */
            channel_id?: (string|null);
        }

        /** Represents a IBCChannel. */
        class IBCChannel implements IIBCChannel {

            /**
             * Constructs a new IBCChannel.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IIBCChannel);

            /** IBCChannel port_id. */
            public port_id: string;

            /** IBCChannel channel_id. */
            public channel_id: string;

            /**
             * Encodes the specified IBCChannel message. Does not implicitly {@link oracle.v1.IBCChannel.verify|verify} messages.
             * @param message IBCChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IIBCChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified IBCChannel message, length delimited. Does not implicitly {@link oracle.v1.IBCChannel.verify|verify} messages.
             * @param message IBCChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IIBCChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a IBCChannel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns IBCChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.IBCChannel;

            /**
             * Decodes a IBCChannel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns IBCChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.IBCChannel;

            /**
             * Verifies a IBCChannel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a IBCChannel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns IBCChannel
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.IBCChannel;

            /**
             * Creates a plain object from a IBCChannel message. Also converts values to other types if specified.
             * @param message IBCChannel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.IBCChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this IBCChannel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RequestVerification. */
        interface IRequestVerification {

            /** RequestVerification chain_id */
            chain_id?: (string|null);

            /** RequestVerification validator */
            validator?: (string|null);

            /** RequestVerification request_id */
            request_id?: (Long|null);

            /** RequestVerification external_id */
            external_id?: (Long|null);
        }

        /** Represents a RequestVerification. */
        class RequestVerification implements IRequestVerification {

            /**
             * Constructs a new RequestVerification.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IRequestVerification);

            /** RequestVerification chain_id. */
            public chain_id: string;

            /** RequestVerification validator. */
            public validator: string;

            /** RequestVerification request_id. */
            public request_id: Long;

            /** RequestVerification external_id. */
            public external_id: Long;

            /**
             * Encodes the specified RequestVerification message. Does not implicitly {@link oracle.v1.RequestVerification.verify|verify} messages.
             * @param message RequestVerification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IRequestVerification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RequestVerification message, length delimited. Does not implicitly {@link oracle.v1.RequestVerification.verify|verify} messages.
             * @param message RequestVerification message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IRequestVerification, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RequestVerification message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RequestVerification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.RequestVerification;

            /**
             * Decodes a RequestVerification message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RequestVerification
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.RequestVerification;

            /**
             * Verifies a RequestVerification message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RequestVerification message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RequestVerification
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.RequestVerification;

            /**
             * Creates a plain object from a RequestVerification message. Also converts values to other types if specified.
             * @param message RequestVerification
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.RequestVerification, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RequestVerification to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PriceResult. */
        interface IPriceResult {

            /** PriceResult symbol */
            symbol?: (string|null);

            /** PriceResult multiplier */
            multiplier?: (Long|null);

            /** PriceResult px */
            px?: (Long|null);

            /** PriceResult request_id */
            request_id?: (Long|null);

            /** PriceResult resolve_time */
            resolve_time?: (Long|null);
        }

        /** Represents a PriceResult. */
        class PriceResult implements IPriceResult {

            /**
             * Constructs a new PriceResult.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IPriceResult);

            /** PriceResult symbol. */
            public symbol: string;

            /** PriceResult multiplier. */
            public multiplier: Long;

            /** PriceResult px. */
            public px: Long;

            /** PriceResult request_id. */
            public request_id: Long;

            /** PriceResult resolve_time. */
            public resolve_time: Long;

            /**
             * Encodes the specified PriceResult message. Does not implicitly {@link oracle.v1.PriceResult.verify|verify} messages.
             * @param message PriceResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IPriceResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PriceResult message, length delimited. Does not implicitly {@link oracle.v1.PriceResult.verify|verify} messages.
             * @param message PriceResult message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IPriceResult, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PriceResult message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PriceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.PriceResult;

            /**
             * Decodes a PriceResult message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PriceResult
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.PriceResult;

            /**
             * Verifies a PriceResult message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PriceResult message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PriceResult
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.PriceResult;

            /**
             * Creates a plain object from a PriceResult message. Also converts values to other types if specified.
             * @param message PriceResult
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.PriceResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PriceResult to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Query */
        class Query extends $protobuf.rpc.Service {

            /**
             * Constructs a new Query service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls Counts.
             * @param request QueryCountsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryCountsResponse
             */
            public counts(request: oracle.v1.IQueryCountsRequest, callback: oracle.v1.Query.CountsCallback): void;

            /**
             * Calls Counts.
             * @param request QueryCountsRequest message or plain object
             * @returns Promise
             */
            public counts(request: oracle.v1.IQueryCountsRequest): Promise<oracle.v1.QueryCountsResponse>;

            /**
             * Calls Data.
             * @param request QueryDataRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryDataResponse
             */
            public data(request: oracle.v1.IQueryDataRequest, callback: oracle.v1.Query.DataCallback): void;

            /**
             * Calls Data.
             * @param request QueryDataRequest message or plain object
             * @returns Promise
             */
            public data(request: oracle.v1.IQueryDataRequest): Promise<oracle.v1.QueryDataResponse>;

            /**
             * Calls DataSource.
             * @param request QueryDataSourceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryDataSourceResponse
             */
            public dataSource(request: oracle.v1.IQueryDataSourceRequest, callback: oracle.v1.Query.DataSourceCallback): void;

            /**
             * Calls DataSource.
             * @param request QueryDataSourceRequest message or plain object
             * @returns Promise
             */
            public dataSource(request: oracle.v1.IQueryDataSourceRequest): Promise<oracle.v1.QueryDataSourceResponse>;

            /**
             * Calls OracleScript.
             * @param request QueryOracleScriptRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryOracleScriptResponse
             */
            public oracleScript(request: oracle.v1.IQueryOracleScriptRequest, callback: oracle.v1.Query.OracleScriptCallback): void;

            /**
             * Calls OracleScript.
             * @param request QueryOracleScriptRequest message or plain object
             * @returns Promise
             */
            public oracleScript(request: oracle.v1.IQueryOracleScriptRequest): Promise<oracle.v1.QueryOracleScriptResponse>;

            /**
             * Calls Request.
             * @param request QueryRequestRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryRequestResponse
             */
            public request(request: oracle.v1.IQueryRequestRequest, callback: oracle.v1.Query.RequestCallback): void;

            /**
             * Calls Request.
             * @param request QueryRequestRequest message or plain object
             * @returns Promise
             */
            public request(request: oracle.v1.IQueryRequestRequest): Promise<oracle.v1.QueryRequestResponse>;

            /**
             * Calls PendingRequests.
             * @param request QueryPendingRequestsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryPendingRequestsResponse
             */
            public pendingRequests(request: oracle.v1.IQueryPendingRequestsRequest, callback: oracle.v1.Query.PendingRequestsCallback): void;

            /**
             * Calls PendingRequests.
             * @param request QueryPendingRequestsRequest message or plain object
             * @returns Promise
             */
            public pendingRequests(request: oracle.v1.IQueryPendingRequestsRequest): Promise<oracle.v1.QueryPendingRequestsResponse>;

            /**
             * Calls Validator.
             * @param request QueryValidatorRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryValidatorResponse
             */
            public validator(request: oracle.v1.IQueryValidatorRequest, callback: oracle.v1.Query.ValidatorCallback): void;

            /**
             * Calls Validator.
             * @param request QueryValidatorRequest message or plain object
             * @returns Promise
             */
            public validator(request: oracle.v1.IQueryValidatorRequest): Promise<oracle.v1.QueryValidatorResponse>;

            /**
             * Calls IsReporter.
             * @param request QueryIsReporterRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryIsReporterResponse
             */
            public isReporter(request: oracle.v1.IQueryIsReporterRequest, callback: oracle.v1.Query.IsReporterCallback): void;

            /**
             * Calls IsReporter.
             * @param request QueryIsReporterRequest message or plain object
             * @returns Promise
             */
            public isReporter(request: oracle.v1.IQueryIsReporterRequest): Promise<oracle.v1.QueryIsReporterResponse>;

            /**
             * Calls Reporters.
             * @param request QueryReportersRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryReportersResponse
             */
            public reporters(request: oracle.v1.IQueryReportersRequest, callback: oracle.v1.Query.ReportersCallback): void;

            /**
             * Calls Reporters.
             * @param request QueryReportersRequest message or plain object
             * @returns Promise
             */
            public reporters(request: oracle.v1.IQueryReportersRequest): Promise<oracle.v1.QueryReportersResponse>;

            /**
             * Calls ActiveValidators.
             * @param request QueryActiveValidatorsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryActiveValidatorsResponse
             */
            public activeValidators(request: oracle.v1.IQueryActiveValidatorsRequest, callback: oracle.v1.Query.ActiveValidatorsCallback): void;

            /**
             * Calls ActiveValidators.
             * @param request QueryActiveValidatorsRequest message or plain object
             * @returns Promise
             */
            public activeValidators(request: oracle.v1.IQueryActiveValidatorsRequest): Promise<oracle.v1.QueryActiveValidatorsResponse>;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryParamsResponse
             */
            public params(request: oracle.v1.IQueryParamsRequest, callback: oracle.v1.Query.ParamsCallback): void;

            /**
             * Calls Params.
             * @param request QueryParamsRequest message or plain object
             * @returns Promise
             */
            public params(request: oracle.v1.IQueryParamsRequest): Promise<oracle.v1.QueryParamsResponse>;

            /**
             * Calls RequestSearch.
             * @param request QueryRequestSearchRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryRequestSearchResponse
             */
            public requestSearch(request: oracle.v1.IQueryRequestSearchRequest, callback: oracle.v1.Query.RequestSearchCallback): void;

            /**
             * Calls RequestSearch.
             * @param request QueryRequestSearchRequest message or plain object
             * @returns Promise
             */
            public requestSearch(request: oracle.v1.IQueryRequestSearchRequest): Promise<oracle.v1.QueryRequestSearchResponse>;

            /**
             * Calls RequestPrice.
             * @param request QueryRequestPriceRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryRequestPriceResponse
             */
            public requestPrice(request: oracle.v1.IQueryRequestPriceRequest, callback: oracle.v1.Query.RequestPriceCallback): void;

            /**
             * Calls RequestPrice.
             * @param request QueryRequestPriceRequest message or plain object
             * @returns Promise
             */
            public requestPrice(request: oracle.v1.IQueryRequestPriceRequest): Promise<oracle.v1.QueryRequestPriceResponse>;

            /**
             * Calls RequestVerification.
             * @param request QueryRequestVerificationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and QueryRequestVerificationResponse
             */
            public requestVerification(request: oracle.v1.IQueryRequestVerificationRequest, callback: oracle.v1.Query.RequestVerificationCallback): void;

            /**
             * Calls RequestVerification.
             * @param request QueryRequestVerificationRequest message or plain object
             * @returns Promise
             */
            public requestVerification(request: oracle.v1.IQueryRequestVerificationRequest): Promise<oracle.v1.QueryRequestVerificationResponse>;
        }

        namespace Query {

            /**
             * Callback as used by {@link oracle.v1.Query#counts}.
             * @param error Error, if any
             * @param [response] QueryCountsResponse
             */
            type CountsCallback = (error: (Error|null), response?: oracle.v1.QueryCountsResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#data}.
             * @param error Error, if any
             * @param [response] QueryDataResponse
             */
            type DataCallback = (error: (Error|null), response?: oracle.v1.QueryDataResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#dataSource}.
             * @param error Error, if any
             * @param [response] QueryDataSourceResponse
             */
            type DataSourceCallback = (error: (Error|null), response?: oracle.v1.QueryDataSourceResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#oracleScript}.
             * @param error Error, if any
             * @param [response] QueryOracleScriptResponse
             */
            type OracleScriptCallback = (error: (Error|null), response?: oracle.v1.QueryOracleScriptResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#request}.
             * @param error Error, if any
             * @param [response] QueryRequestResponse
             */
            type RequestCallback = (error: (Error|null), response?: oracle.v1.QueryRequestResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#pendingRequests}.
             * @param error Error, if any
             * @param [response] QueryPendingRequestsResponse
             */
            type PendingRequestsCallback = (error: (Error|null), response?: oracle.v1.QueryPendingRequestsResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#validator}.
             * @param error Error, if any
             * @param [response] QueryValidatorResponse
             */
            type ValidatorCallback = (error: (Error|null), response?: oracle.v1.QueryValidatorResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#isReporter}.
             * @param error Error, if any
             * @param [response] QueryIsReporterResponse
             */
            type IsReporterCallback = (error: (Error|null), response?: oracle.v1.QueryIsReporterResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#reporters}.
             * @param error Error, if any
             * @param [response] QueryReportersResponse
             */
            type ReportersCallback = (error: (Error|null), response?: oracle.v1.QueryReportersResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#activeValidators}.
             * @param error Error, if any
             * @param [response] QueryActiveValidatorsResponse
             */
            type ActiveValidatorsCallback = (error: (Error|null), response?: oracle.v1.QueryActiveValidatorsResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#params}.
             * @param error Error, if any
             * @param [response] QueryParamsResponse
             */
            type ParamsCallback = (error: (Error|null), response?: oracle.v1.QueryParamsResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#requestSearch}.
             * @param error Error, if any
             * @param [response] QueryRequestSearchResponse
             */
            type RequestSearchCallback = (error: (Error|null), response?: oracle.v1.QueryRequestSearchResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#requestPrice}.
             * @param error Error, if any
             * @param [response] QueryRequestPriceResponse
             */
            type RequestPriceCallback = (error: (Error|null), response?: oracle.v1.QueryRequestPriceResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Query#requestVerification}.
             * @param error Error, if any
             * @param [response] QueryRequestVerificationResponse
             */
            type RequestVerificationCallback = (error: (Error|null), response?: oracle.v1.QueryRequestVerificationResponse) => void;
        }

        /** Properties of a QueryCountsRequest. */
        interface IQueryCountsRequest {
        }

        /** Represents a QueryCountsRequest. */
        class QueryCountsRequest implements IQueryCountsRequest {

            /**
             * Constructs a new QueryCountsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryCountsRequest);

            /**
             * Encodes the specified QueryCountsRequest message. Does not implicitly {@link oracle.v1.QueryCountsRequest.verify|verify} messages.
             * @param message QueryCountsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryCountsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryCountsRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryCountsRequest.verify|verify} messages.
             * @param message QueryCountsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryCountsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryCountsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryCountsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryCountsRequest;

            /**
             * Decodes a QueryCountsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryCountsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryCountsRequest;

            /**
             * Verifies a QueryCountsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryCountsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryCountsRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryCountsRequest;

            /**
             * Creates a plain object from a QueryCountsRequest message. Also converts values to other types if specified.
             * @param message QueryCountsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryCountsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryCountsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryCountsResponse. */
        interface IQueryCountsResponse {

            /** QueryCountsResponse data_source_count */
            data_source_count?: (Long|null);

            /** QueryCountsResponse oracle_script_count */
            oracle_script_count?: (Long|null);

            /** QueryCountsResponse request_count */
            request_count?: (Long|null);
        }

        /** Represents a QueryCountsResponse. */
        class QueryCountsResponse implements IQueryCountsResponse {

            /**
             * Constructs a new QueryCountsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryCountsResponse);

            /** QueryCountsResponse data_source_count. */
            public data_source_count: Long;

            /** QueryCountsResponse oracle_script_count. */
            public oracle_script_count: Long;

            /** QueryCountsResponse request_count. */
            public request_count: Long;

            /**
             * Encodes the specified QueryCountsResponse message. Does not implicitly {@link oracle.v1.QueryCountsResponse.verify|verify} messages.
             * @param message QueryCountsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryCountsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryCountsResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryCountsResponse.verify|verify} messages.
             * @param message QueryCountsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryCountsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryCountsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryCountsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryCountsResponse;

            /**
             * Decodes a QueryCountsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryCountsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryCountsResponse;

            /**
             * Verifies a QueryCountsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryCountsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryCountsResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryCountsResponse;

            /**
             * Creates a plain object from a QueryCountsResponse message. Also converts values to other types if specified.
             * @param message QueryCountsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryCountsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryCountsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDataRequest. */
        interface IQueryDataRequest {

            /** QueryDataRequest data_hash */
            data_hash?: (string|null);
        }

        /** Represents a QueryDataRequest. */
        class QueryDataRequest implements IQueryDataRequest {

            /**
             * Constructs a new QueryDataRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryDataRequest);

            /** QueryDataRequest data_hash. */
            public data_hash: string;

            /**
             * Encodes the specified QueryDataRequest message. Does not implicitly {@link oracle.v1.QueryDataRequest.verify|verify} messages.
             * @param message QueryDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDataRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryDataRequest.verify|verify} messages.
             * @param message QueryDataRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryDataRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDataRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryDataRequest;

            /**
             * Decodes a QueryDataRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDataRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryDataRequest;

            /**
             * Verifies a QueryDataRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDataRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDataRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryDataRequest;

            /**
             * Creates a plain object from a QueryDataRequest message. Also converts values to other types if specified.
             * @param message QueryDataRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryDataRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDataRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDataResponse. */
        interface IQueryDataResponse {

            /** QueryDataResponse data */
            data?: (Uint8Array|null);
        }

        /** Represents a QueryDataResponse. */
        class QueryDataResponse implements IQueryDataResponse {

            /**
             * Constructs a new QueryDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryDataResponse);

            /** QueryDataResponse data. */
            public data: Uint8Array;

            /**
             * Encodes the specified QueryDataResponse message. Does not implicitly {@link oracle.v1.QueryDataResponse.verify|verify} messages.
             * @param message QueryDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDataResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryDataResponse.verify|verify} messages.
             * @param message QueryDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryDataResponse;

            /**
             * Decodes a QueryDataResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryDataResponse;

            /**
             * Verifies a QueryDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDataResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDataResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryDataResponse;

            /**
             * Creates a plain object from a QueryDataResponse message. Also converts values to other types if specified.
             * @param message QueryDataResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDataResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDataSourceRequest. */
        interface IQueryDataSourceRequest {

            /** QueryDataSourceRequest data_source_id */
            data_source_id?: (Long|null);
        }

        /** Represents a QueryDataSourceRequest. */
        class QueryDataSourceRequest implements IQueryDataSourceRequest {

            /**
             * Constructs a new QueryDataSourceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryDataSourceRequest);

            /** QueryDataSourceRequest data_source_id. */
            public data_source_id: Long;

            /**
             * Encodes the specified QueryDataSourceRequest message. Does not implicitly {@link oracle.v1.QueryDataSourceRequest.verify|verify} messages.
             * @param message QueryDataSourceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryDataSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDataSourceRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryDataSourceRequest.verify|verify} messages.
             * @param message QueryDataSourceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryDataSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDataSourceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDataSourceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryDataSourceRequest;

            /**
             * Decodes a QueryDataSourceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDataSourceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryDataSourceRequest;

            /**
             * Verifies a QueryDataSourceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDataSourceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDataSourceRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryDataSourceRequest;

            /**
             * Creates a plain object from a QueryDataSourceRequest message. Also converts values to other types if specified.
             * @param message QueryDataSourceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryDataSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDataSourceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryDataSourceResponse. */
        interface IQueryDataSourceResponse {

            /** QueryDataSourceResponse data_source */
            data_source?: (oracle.v1.IDataSource|null);
        }

        /** Represents a QueryDataSourceResponse. */
        class QueryDataSourceResponse implements IQueryDataSourceResponse {

            /**
             * Constructs a new QueryDataSourceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryDataSourceResponse);

            /** QueryDataSourceResponse data_source. */
            public data_source?: (oracle.v1.IDataSource|null);

            /**
             * Encodes the specified QueryDataSourceResponse message. Does not implicitly {@link oracle.v1.QueryDataSourceResponse.verify|verify} messages.
             * @param message QueryDataSourceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryDataSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryDataSourceResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryDataSourceResponse.verify|verify} messages.
             * @param message QueryDataSourceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryDataSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryDataSourceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryDataSourceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryDataSourceResponse;

            /**
             * Decodes a QueryDataSourceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryDataSourceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryDataSourceResponse;

            /**
             * Verifies a QueryDataSourceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryDataSourceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryDataSourceResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryDataSourceResponse;

            /**
             * Creates a plain object from a QueryDataSourceResponse message. Also converts values to other types if specified.
             * @param message QueryDataSourceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryDataSourceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryDataSourceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOracleScriptRequest. */
        interface IQueryOracleScriptRequest {

            /** QueryOracleScriptRequest oracle_script_id */
            oracle_script_id?: (Long|null);
        }

        /** Represents a QueryOracleScriptRequest. */
        class QueryOracleScriptRequest implements IQueryOracleScriptRequest {

            /**
             * Constructs a new QueryOracleScriptRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryOracleScriptRequest);

            /** QueryOracleScriptRequest oracle_script_id. */
            public oracle_script_id: Long;

            /**
             * Encodes the specified QueryOracleScriptRequest message. Does not implicitly {@link oracle.v1.QueryOracleScriptRequest.verify|verify} messages.
             * @param message QueryOracleScriptRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryOracleScriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryOracleScriptRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryOracleScriptRequest.verify|verify} messages.
             * @param message QueryOracleScriptRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryOracleScriptRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOracleScriptRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryOracleScriptRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryOracleScriptRequest;

            /**
             * Decodes a QueryOracleScriptRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryOracleScriptRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryOracleScriptRequest;

            /**
             * Verifies a QueryOracleScriptRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryOracleScriptRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryOracleScriptRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryOracleScriptRequest;

            /**
             * Creates a plain object from a QueryOracleScriptRequest message. Also converts values to other types if specified.
             * @param message QueryOracleScriptRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryOracleScriptRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOracleScriptRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryOracleScriptResponse. */
        interface IQueryOracleScriptResponse {

            /** QueryOracleScriptResponse oracle_script */
            oracle_script?: (oracle.v1.IOracleScript|null);
        }

        /** Represents a QueryOracleScriptResponse. */
        class QueryOracleScriptResponse implements IQueryOracleScriptResponse {

            /**
             * Constructs a new QueryOracleScriptResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryOracleScriptResponse);

            /** QueryOracleScriptResponse oracle_script. */
            public oracle_script?: (oracle.v1.IOracleScript|null);

            /**
             * Encodes the specified QueryOracleScriptResponse message. Does not implicitly {@link oracle.v1.QueryOracleScriptResponse.verify|verify} messages.
             * @param message QueryOracleScriptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryOracleScriptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryOracleScriptResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryOracleScriptResponse.verify|verify} messages.
             * @param message QueryOracleScriptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryOracleScriptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryOracleScriptResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryOracleScriptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryOracleScriptResponse;

            /**
             * Decodes a QueryOracleScriptResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryOracleScriptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryOracleScriptResponse;

            /**
             * Verifies a QueryOracleScriptResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryOracleScriptResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryOracleScriptResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryOracleScriptResponse;

            /**
             * Creates a plain object from a QueryOracleScriptResponse message. Also converts values to other types if specified.
             * @param message QueryOracleScriptResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryOracleScriptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryOracleScriptResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestRequest. */
        interface IQueryRequestRequest {

            /** QueryRequestRequest request_id */
            request_id?: (Long|null);
        }

        /** Represents a QueryRequestRequest. */
        class QueryRequestRequest implements IQueryRequestRequest {

            /**
             * Constructs a new QueryRequestRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestRequest);

            /** QueryRequestRequest request_id. */
            public request_id: Long;

            /**
             * Encodes the specified QueryRequestRequest message. Does not implicitly {@link oracle.v1.QueryRequestRequest.verify|verify} messages.
             * @param message QueryRequestRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestRequest.verify|verify} messages.
             * @param message QueryRequestRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestRequest;

            /**
             * Decodes a QueryRequestRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestRequest;

            /**
             * Verifies a QueryRequestRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestRequest;

            /**
             * Creates a plain object from a QueryRequestRequest message. Also converts values to other types if specified.
             * @param message QueryRequestRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestResponse. */
        interface IQueryRequestResponse {

            /** QueryRequestResponse request */
            request?: (oracle.v1.IRequest|null);

            /** QueryRequestResponse reports */
            reports?: (oracle.v1.IReport[]|null);

            /** QueryRequestResponse result */
            result?: (oracle.v1.IResult|null);
        }

        /** Represents a QueryRequestResponse. */
        class QueryRequestResponse implements IQueryRequestResponse {

            /**
             * Constructs a new QueryRequestResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestResponse);

            /** QueryRequestResponse request. */
            public request?: (oracle.v1.IRequest|null);

            /** QueryRequestResponse reports. */
            public reports: oracle.v1.IReport[];

            /** QueryRequestResponse result. */
            public result?: (oracle.v1.IResult|null);

            /**
             * Encodes the specified QueryRequestResponse message. Does not implicitly {@link oracle.v1.QueryRequestResponse.verify|verify} messages.
             * @param message QueryRequestResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestResponse.verify|verify} messages.
             * @param message QueryRequestResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestResponse;

            /**
             * Decodes a QueryRequestResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestResponse;

            /**
             * Verifies a QueryRequestResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestResponse;

            /**
             * Creates a plain object from a QueryRequestResponse message. Also converts values to other types if specified.
             * @param message QueryRequestResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryPendingRequestsRequest. */
        interface IQueryPendingRequestsRequest {

            /** QueryPendingRequestsRequest validator_address */
            validator_address?: (string|null);
        }

        /** Represents a QueryPendingRequestsRequest. */
        class QueryPendingRequestsRequest implements IQueryPendingRequestsRequest {

            /**
             * Constructs a new QueryPendingRequestsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryPendingRequestsRequest);

            /** QueryPendingRequestsRequest validator_address. */
            public validator_address: string;

            /**
             * Encodes the specified QueryPendingRequestsRequest message. Does not implicitly {@link oracle.v1.QueryPendingRequestsRequest.verify|verify} messages.
             * @param message QueryPendingRequestsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryPendingRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryPendingRequestsRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryPendingRequestsRequest.verify|verify} messages.
             * @param message QueryPendingRequestsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryPendingRequestsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryPendingRequestsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryPendingRequestsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryPendingRequestsRequest;

            /**
             * Decodes a QueryPendingRequestsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryPendingRequestsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryPendingRequestsRequest;

            /**
             * Verifies a QueryPendingRequestsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryPendingRequestsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryPendingRequestsRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryPendingRequestsRequest;

            /**
             * Creates a plain object from a QueryPendingRequestsRequest message. Also converts values to other types if specified.
             * @param message QueryPendingRequestsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryPendingRequestsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryPendingRequestsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryPendingRequestsResponse. */
        interface IQueryPendingRequestsResponse {

            /** QueryPendingRequestsResponse request_ids */
            request_ids?: (Long[]|null);
        }

        /** Represents a QueryPendingRequestsResponse. */
        class QueryPendingRequestsResponse implements IQueryPendingRequestsResponse {

            /**
             * Constructs a new QueryPendingRequestsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryPendingRequestsResponse);

            /** QueryPendingRequestsResponse request_ids. */
            public request_ids: Long[];

            /**
             * Encodes the specified QueryPendingRequestsResponse message. Does not implicitly {@link oracle.v1.QueryPendingRequestsResponse.verify|verify} messages.
             * @param message QueryPendingRequestsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryPendingRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryPendingRequestsResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryPendingRequestsResponse.verify|verify} messages.
             * @param message QueryPendingRequestsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryPendingRequestsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryPendingRequestsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryPendingRequestsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryPendingRequestsResponse;

            /**
             * Decodes a QueryPendingRequestsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryPendingRequestsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryPendingRequestsResponse;

            /**
             * Verifies a QueryPendingRequestsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryPendingRequestsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryPendingRequestsResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryPendingRequestsResponse;

            /**
             * Creates a plain object from a QueryPendingRequestsResponse message. Also converts values to other types if specified.
             * @param message QueryPendingRequestsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryPendingRequestsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryPendingRequestsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsRequest. */
        interface IQueryParamsRequest {
        }

        /** Represents a QueryParamsRequest. */
        class QueryParamsRequest implements IQueryParamsRequest {

            /**
             * Constructs a new QueryParamsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryParamsRequest);

            /**
             * Encodes the specified QueryParamsRequest message. Does not implicitly {@link oracle.v1.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryParamsRequest.verify|verify} messages.
             * @param message QueryParamsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryParamsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryParamsRequest;

            /**
             * Decodes a QueryParamsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryParamsRequest;

            /**
             * Verifies a QueryParamsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryParamsRequest;

            /**
             * Creates a plain object from a QueryParamsRequest message. Also converts values to other types if specified.
             * @param message QueryParamsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryParamsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryParamsResponse. */
        interface IQueryParamsResponse {

            /** QueryParamsResponse params */
            params?: (oracle.v1.IParams|null);
        }

        /** Represents a QueryParamsResponse. */
        class QueryParamsResponse implements IQueryParamsResponse {

            /**
             * Constructs a new QueryParamsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryParamsResponse);

            /** QueryParamsResponse params. */
            public params?: (oracle.v1.IParams|null);

            /**
             * Encodes the specified QueryParamsResponse message. Does not implicitly {@link oracle.v1.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryParamsResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryParamsResponse.verify|verify} messages.
             * @param message QueryParamsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryParamsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryParamsResponse;

            /**
             * Decodes a QueryParamsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryParamsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryParamsResponse;

            /**
             * Verifies a QueryParamsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryParamsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryParamsResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryParamsResponse;

            /**
             * Creates a plain object from a QueryParamsResponse message. Also converts values to other types if specified.
             * @param message QueryParamsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryParamsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryParamsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValidatorRequest. */
        interface IQueryValidatorRequest {

            /** QueryValidatorRequest validator_address */
            validator_address?: (string|null);
        }

        /** Represents a QueryValidatorRequest. */
        class QueryValidatorRequest implements IQueryValidatorRequest {

            /**
             * Constructs a new QueryValidatorRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryValidatorRequest);

            /** QueryValidatorRequest validator_address. */
            public validator_address: string;

            /**
             * Encodes the specified QueryValidatorRequest message. Does not implicitly {@link oracle.v1.QueryValidatorRequest.verify|verify} messages.
             * @param message QueryValidatorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryValidatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValidatorRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryValidatorRequest.verify|verify} messages.
             * @param message QueryValidatorRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryValidatorRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValidatorRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValidatorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryValidatorRequest;

            /**
             * Decodes a QueryValidatorRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValidatorRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryValidatorRequest;

            /**
             * Verifies a QueryValidatorRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValidatorRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValidatorRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryValidatorRequest;

            /**
             * Creates a plain object from a QueryValidatorRequest message. Also converts values to other types if specified.
             * @param message QueryValidatorRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryValidatorRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValidatorRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryValidatorResponse. */
        interface IQueryValidatorResponse {

            /** QueryValidatorResponse status */
            status?: (oracle.v1.IValidatorStatus|null);
        }

        /** Represents a QueryValidatorResponse. */
        class QueryValidatorResponse implements IQueryValidatorResponse {

            /**
             * Constructs a new QueryValidatorResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryValidatorResponse);

            /** QueryValidatorResponse status. */
            public status?: (oracle.v1.IValidatorStatus|null);

            /**
             * Encodes the specified QueryValidatorResponse message. Does not implicitly {@link oracle.v1.QueryValidatorResponse.verify|verify} messages.
             * @param message QueryValidatorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryValidatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryValidatorResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryValidatorResponse.verify|verify} messages.
             * @param message QueryValidatorResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryValidatorResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryValidatorResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryValidatorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryValidatorResponse;

            /**
             * Decodes a QueryValidatorResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryValidatorResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryValidatorResponse;

            /**
             * Verifies a QueryValidatorResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryValidatorResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryValidatorResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryValidatorResponse;

            /**
             * Creates a plain object from a QueryValidatorResponse message. Also converts values to other types if specified.
             * @param message QueryValidatorResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryValidatorResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryValidatorResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryIsReporterRequest. */
        interface IQueryIsReporterRequest {

            /** QueryIsReporterRequest validator_address */
            validator_address?: (string|null);

            /** QueryIsReporterRequest reporter_address */
            reporter_address?: (string|null);
        }

        /** Represents a QueryIsReporterRequest. */
        class QueryIsReporterRequest implements IQueryIsReporterRequest {

            /**
             * Constructs a new QueryIsReporterRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryIsReporterRequest);

            /** QueryIsReporterRequest validator_address. */
            public validator_address: string;

            /** QueryIsReporterRequest reporter_address. */
            public reporter_address: string;

            /**
             * Encodes the specified QueryIsReporterRequest message. Does not implicitly {@link oracle.v1.QueryIsReporterRequest.verify|verify} messages.
             * @param message QueryIsReporterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryIsReporterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryIsReporterRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryIsReporterRequest.verify|verify} messages.
             * @param message QueryIsReporterRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryIsReporterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryIsReporterRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryIsReporterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryIsReporterRequest;

            /**
             * Decodes a QueryIsReporterRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryIsReporterRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryIsReporterRequest;

            /**
             * Verifies a QueryIsReporterRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryIsReporterRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryIsReporterRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryIsReporterRequest;

            /**
             * Creates a plain object from a QueryIsReporterRequest message. Also converts values to other types if specified.
             * @param message QueryIsReporterRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryIsReporterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryIsReporterRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryIsReporterResponse. */
        interface IQueryIsReporterResponse {

            /** QueryIsReporterResponse is_reporter */
            is_reporter?: (boolean|null);
        }

        /** Represents a QueryIsReporterResponse. */
        class QueryIsReporterResponse implements IQueryIsReporterResponse {

            /**
             * Constructs a new QueryIsReporterResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryIsReporterResponse);

            /** QueryIsReporterResponse is_reporter. */
            public is_reporter: boolean;

            /**
             * Encodes the specified QueryIsReporterResponse message. Does not implicitly {@link oracle.v1.QueryIsReporterResponse.verify|verify} messages.
             * @param message QueryIsReporterResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryIsReporterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryIsReporterResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryIsReporterResponse.verify|verify} messages.
             * @param message QueryIsReporterResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryIsReporterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryIsReporterResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryIsReporterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryIsReporterResponse;

            /**
             * Decodes a QueryIsReporterResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryIsReporterResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryIsReporterResponse;

            /**
             * Verifies a QueryIsReporterResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryIsReporterResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryIsReporterResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryIsReporterResponse;

            /**
             * Creates a plain object from a QueryIsReporterResponse message. Also converts values to other types if specified.
             * @param message QueryIsReporterResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryIsReporterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryIsReporterResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryReportersRequest. */
        interface IQueryReportersRequest {

            /** QueryReportersRequest validator_address */
            validator_address?: (string|null);
        }

        /** Represents a QueryReportersRequest. */
        class QueryReportersRequest implements IQueryReportersRequest {

            /**
             * Constructs a new QueryReportersRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryReportersRequest);

            /** QueryReportersRequest validator_address. */
            public validator_address: string;

            /**
             * Encodes the specified QueryReportersRequest message. Does not implicitly {@link oracle.v1.QueryReportersRequest.verify|verify} messages.
             * @param message QueryReportersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryReportersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryReportersRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryReportersRequest.verify|verify} messages.
             * @param message QueryReportersRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryReportersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryReportersRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryReportersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryReportersRequest;

            /**
             * Decodes a QueryReportersRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryReportersRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryReportersRequest;

            /**
             * Verifies a QueryReportersRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryReportersRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryReportersRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryReportersRequest;

            /**
             * Creates a plain object from a QueryReportersRequest message. Also converts values to other types if specified.
             * @param message QueryReportersRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryReportersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryReportersRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryReportersResponse. */
        interface IQueryReportersResponse {

            /** QueryReportersResponse reporter */
            reporter?: (string[]|null);
        }

        /** Represents a QueryReportersResponse. */
        class QueryReportersResponse implements IQueryReportersResponse {

            /**
             * Constructs a new QueryReportersResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryReportersResponse);

            /** QueryReportersResponse reporter. */
            public reporter: string[];

            /**
             * Encodes the specified QueryReportersResponse message. Does not implicitly {@link oracle.v1.QueryReportersResponse.verify|verify} messages.
             * @param message QueryReportersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryReportersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryReportersResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryReportersResponse.verify|verify} messages.
             * @param message QueryReportersResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryReportersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryReportersResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryReportersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryReportersResponse;

            /**
             * Decodes a QueryReportersResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryReportersResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryReportersResponse;

            /**
             * Verifies a QueryReportersResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryReportersResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryReportersResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryReportersResponse;

            /**
             * Creates a plain object from a QueryReportersResponse message. Also converts values to other types if specified.
             * @param message QueryReportersResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryReportersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryReportersResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryActiveValidatorsRequest. */
        interface IQueryActiveValidatorsRequest {
        }

        /** Represents a QueryActiveValidatorsRequest. */
        class QueryActiveValidatorsRequest implements IQueryActiveValidatorsRequest {

            /**
             * Constructs a new QueryActiveValidatorsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryActiveValidatorsRequest);

            /**
             * Encodes the specified QueryActiveValidatorsRequest message. Does not implicitly {@link oracle.v1.QueryActiveValidatorsRequest.verify|verify} messages.
             * @param message QueryActiveValidatorsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryActiveValidatorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryActiveValidatorsRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryActiveValidatorsRequest.verify|verify} messages.
             * @param message QueryActiveValidatorsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryActiveValidatorsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryActiveValidatorsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryActiveValidatorsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryActiveValidatorsRequest;

            /**
             * Decodes a QueryActiveValidatorsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryActiveValidatorsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryActiveValidatorsRequest;

            /**
             * Verifies a QueryActiveValidatorsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryActiveValidatorsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryActiveValidatorsRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryActiveValidatorsRequest;

            /**
             * Creates a plain object from a QueryActiveValidatorsRequest message. Also converts values to other types if specified.
             * @param message QueryActiveValidatorsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryActiveValidatorsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryActiveValidatorsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryActiveValidatorsResponse. */
        interface IQueryActiveValidatorsResponse {

            /** QueryActiveValidatorsResponse validators */
            validators?: (oracle.v1.IActiveValidator[]|null);
        }

        /** Represents a QueryActiveValidatorsResponse. */
        class QueryActiveValidatorsResponse implements IQueryActiveValidatorsResponse {

            /**
             * Constructs a new QueryActiveValidatorsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryActiveValidatorsResponse);

            /** QueryActiveValidatorsResponse validators. */
            public validators: oracle.v1.IActiveValidator[];

            /**
             * Encodes the specified QueryActiveValidatorsResponse message. Does not implicitly {@link oracle.v1.QueryActiveValidatorsResponse.verify|verify} messages.
             * @param message QueryActiveValidatorsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryActiveValidatorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryActiveValidatorsResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryActiveValidatorsResponse.verify|verify} messages.
             * @param message QueryActiveValidatorsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryActiveValidatorsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryActiveValidatorsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryActiveValidatorsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryActiveValidatorsResponse;

            /**
             * Decodes a QueryActiveValidatorsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryActiveValidatorsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryActiveValidatorsResponse;

            /**
             * Verifies a QueryActiveValidatorsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryActiveValidatorsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryActiveValidatorsResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryActiveValidatorsResponse;

            /**
             * Creates a plain object from a QueryActiveValidatorsResponse message. Also converts values to other types if specified.
             * @param message QueryActiveValidatorsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryActiveValidatorsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryActiveValidatorsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestSearchRequest. */
        interface IQueryRequestSearchRequest {

            /** QueryRequestSearchRequest oracle_script_id */
            oracle_script_id?: (Long|null);

            /** QueryRequestSearchRequest calldata */
            calldata?: (string|null);

            /** QueryRequestSearchRequest ask_count */
            ask_count?: (Long|null);

            /** QueryRequestSearchRequest min_count */
            min_count?: (Long|null);
        }

        /** Represents a QueryRequestSearchRequest. */
        class QueryRequestSearchRequest implements IQueryRequestSearchRequest {

            /**
             * Constructs a new QueryRequestSearchRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestSearchRequest);

            /** QueryRequestSearchRequest oracle_script_id. */
            public oracle_script_id: Long;

            /** QueryRequestSearchRequest calldata. */
            public calldata: string;

            /** QueryRequestSearchRequest ask_count. */
            public ask_count: Long;

            /** QueryRequestSearchRequest min_count. */
            public min_count: Long;

            /**
             * Encodes the specified QueryRequestSearchRequest message. Does not implicitly {@link oracle.v1.QueryRequestSearchRequest.verify|verify} messages.
             * @param message QueryRequestSearchRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestSearchRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestSearchRequest.verify|verify} messages.
             * @param message QueryRequestSearchRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestSearchRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestSearchRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestSearchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestSearchRequest;

            /**
             * Decodes a QueryRequestSearchRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestSearchRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestSearchRequest;

            /**
             * Verifies a QueryRequestSearchRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestSearchRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestSearchRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestSearchRequest;

            /**
             * Creates a plain object from a QueryRequestSearchRequest message. Also converts values to other types if specified.
             * @param message QueryRequestSearchRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestSearchRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestSearchRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestSearchResponse. */
        interface IQueryRequestSearchResponse {

            /** QueryRequestSearchResponse request */
            request?: (oracle.v1.IQueryRequestResponse|null);
        }

        /** Represents a QueryRequestSearchResponse. */
        class QueryRequestSearchResponse implements IQueryRequestSearchResponse {

            /**
             * Constructs a new QueryRequestSearchResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestSearchResponse);

            /** QueryRequestSearchResponse request. */
            public request?: (oracle.v1.IQueryRequestResponse|null);

            /**
             * Encodes the specified QueryRequestSearchResponse message. Does not implicitly {@link oracle.v1.QueryRequestSearchResponse.verify|verify} messages.
             * @param message QueryRequestSearchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestSearchResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestSearchResponse.verify|verify} messages.
             * @param message QueryRequestSearchResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestSearchResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestSearchResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestSearchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestSearchResponse;

            /**
             * Decodes a QueryRequestSearchResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestSearchResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestSearchResponse;

            /**
             * Verifies a QueryRequestSearchResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestSearchResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestSearchResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestSearchResponse;

            /**
             * Creates a plain object from a QueryRequestSearchResponse message. Also converts values to other types if specified.
             * @param message QueryRequestSearchResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestSearchResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestSearchResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestPriceRequest. */
        interface IQueryRequestPriceRequest {

            /** QueryRequestPriceRequest symbols */
            symbols?: (string[]|null);

            /** QueryRequestPriceRequest ask_count */
            ask_count?: (Long|null);

            /** QueryRequestPriceRequest min_count */
            min_count?: (Long|null);
        }

        /** Represents a QueryRequestPriceRequest. */
        class QueryRequestPriceRequest implements IQueryRequestPriceRequest {

            /**
             * Constructs a new QueryRequestPriceRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestPriceRequest);

            /** QueryRequestPriceRequest symbols. */
            public symbols: string[];

            /** QueryRequestPriceRequest ask_count. */
            public ask_count: Long;

            /** QueryRequestPriceRequest min_count. */
            public min_count: Long;

            /**
             * Encodes the specified QueryRequestPriceRequest message. Does not implicitly {@link oracle.v1.QueryRequestPriceRequest.verify|verify} messages.
             * @param message QueryRequestPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestPriceRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestPriceRequest.verify|verify} messages.
             * @param message QueryRequestPriceRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestPriceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestPriceRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestPriceRequest;

            /**
             * Decodes a QueryRequestPriceRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestPriceRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestPriceRequest;

            /**
             * Verifies a QueryRequestPriceRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestPriceRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestPriceRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestPriceRequest;

            /**
             * Creates a plain object from a QueryRequestPriceRequest message. Also converts values to other types if specified.
             * @param message QueryRequestPriceRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestPriceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestPriceRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestPriceResponse. */
        interface IQueryRequestPriceResponse {

            /** QueryRequestPriceResponse price_results */
            price_results?: (oracle.v1.IPriceResult[]|null);
        }

        /** Represents a QueryRequestPriceResponse. */
        class QueryRequestPriceResponse implements IQueryRequestPriceResponse {

            /**
             * Constructs a new QueryRequestPriceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestPriceResponse);

            /** QueryRequestPriceResponse price_results. */
            public price_results: oracle.v1.IPriceResult[];

            /**
             * Encodes the specified QueryRequestPriceResponse message. Does not implicitly {@link oracle.v1.QueryRequestPriceResponse.verify|verify} messages.
             * @param message QueryRequestPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestPriceResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestPriceResponse.verify|verify} messages.
             * @param message QueryRequestPriceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestPriceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestPriceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestPriceResponse;

            /**
             * Decodes a QueryRequestPriceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestPriceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestPriceResponse;

            /**
             * Verifies a QueryRequestPriceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestPriceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestPriceResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestPriceResponse;

            /**
             * Creates a plain object from a QueryRequestPriceResponse message. Also converts values to other types if specified.
             * @param message QueryRequestPriceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestPriceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestPriceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestVerificationRequest. */
        interface IQueryRequestVerificationRequest {

            /** QueryRequestVerificationRequest chain_id */
            chain_id?: (string|null);

            /** QueryRequestVerificationRequest validator */
            validator?: (string|null);

            /** QueryRequestVerificationRequest request_id */
            request_id?: (Long|null);

            /** QueryRequestVerificationRequest external_id */
            external_id?: (Long|null);

            /** QueryRequestVerificationRequest reporter */
            reporter?: (string|null);

            /** QueryRequestVerificationRequest signature */
            signature?: (Uint8Array|null);
        }

        /** Represents a QueryRequestVerificationRequest. */
        class QueryRequestVerificationRequest implements IQueryRequestVerificationRequest {

            /**
             * Constructs a new QueryRequestVerificationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestVerificationRequest);

            /** QueryRequestVerificationRequest chain_id. */
            public chain_id: string;

            /** QueryRequestVerificationRequest validator. */
            public validator: string;

            /** QueryRequestVerificationRequest request_id. */
            public request_id: Long;

            /** QueryRequestVerificationRequest external_id. */
            public external_id: Long;

            /** QueryRequestVerificationRequest reporter. */
            public reporter: string;

            /** QueryRequestVerificationRequest signature. */
            public signature: Uint8Array;

            /**
             * Encodes the specified QueryRequestVerificationRequest message. Does not implicitly {@link oracle.v1.QueryRequestVerificationRequest.verify|verify} messages.
             * @param message QueryRequestVerificationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestVerificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestVerificationRequest message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestVerificationRequest.verify|verify} messages.
             * @param message QueryRequestVerificationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestVerificationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestVerificationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestVerificationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestVerificationRequest;

            /**
             * Decodes a QueryRequestVerificationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestVerificationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestVerificationRequest;

            /**
             * Verifies a QueryRequestVerificationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestVerificationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestVerificationRequest
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestVerificationRequest;

            /**
             * Creates a plain object from a QueryRequestVerificationRequest message. Also converts values to other types if specified.
             * @param message QueryRequestVerificationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestVerificationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestVerificationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a QueryRequestVerificationResponse. */
        interface IQueryRequestVerificationResponse {

            /** QueryRequestVerificationResponse chain_id */
            chain_id?: (string|null);

            /** QueryRequestVerificationResponse validator */
            validator?: (string|null);

            /** QueryRequestVerificationResponse request_id */
            request_id?: (Long|null);

            /** QueryRequestVerificationResponse external_id */
            external_id?: (Long|null);

            /** QueryRequestVerificationResponse data_source_id */
            data_source_id?: (Long|null);
        }

        /** Represents a QueryRequestVerificationResponse. */
        class QueryRequestVerificationResponse implements IQueryRequestVerificationResponse {

            /**
             * Constructs a new QueryRequestVerificationResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IQueryRequestVerificationResponse);

            /** QueryRequestVerificationResponse chain_id. */
            public chain_id: string;

            /** QueryRequestVerificationResponse validator. */
            public validator: string;

            /** QueryRequestVerificationResponse request_id. */
            public request_id: Long;

            /** QueryRequestVerificationResponse external_id. */
            public external_id: Long;

            /** QueryRequestVerificationResponse data_source_id. */
            public data_source_id: Long;

            /**
             * Encodes the specified QueryRequestVerificationResponse message. Does not implicitly {@link oracle.v1.QueryRequestVerificationResponse.verify|verify} messages.
             * @param message QueryRequestVerificationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IQueryRequestVerificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified QueryRequestVerificationResponse message, length delimited. Does not implicitly {@link oracle.v1.QueryRequestVerificationResponse.verify|verify} messages.
             * @param message QueryRequestVerificationResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IQueryRequestVerificationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a QueryRequestVerificationResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns QueryRequestVerificationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.QueryRequestVerificationResponse;

            /**
             * Decodes a QueryRequestVerificationResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns QueryRequestVerificationResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.QueryRequestVerificationResponse;

            /**
             * Verifies a QueryRequestVerificationResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a QueryRequestVerificationResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns QueryRequestVerificationResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.QueryRequestVerificationResponse;

            /**
             * Creates a plain object from a QueryRequestVerificationResponse message. Also converts values to other types if specified.
             * @param message QueryRequestVerificationResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.QueryRequestVerificationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this QueryRequestVerificationResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Represents a Msg */
        class Msg extends $protobuf.rpc.Service {

            /**
             * Constructs a new Msg service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Calls RequestData.
             * @param request MsgRequestData message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgRequestDataResponse
             */
            public requestData(request: oracle.v1.IMsgRequestData, callback: oracle.v1.Msg.RequestDataCallback): void;

            /**
             * Calls RequestData.
             * @param request MsgRequestData message or plain object
             * @returns Promise
             */
            public requestData(request: oracle.v1.IMsgRequestData): Promise<oracle.v1.MsgRequestDataResponse>;

            /**
             * Calls ReportData.
             * @param request MsgReportData message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgReportDataResponse
             */
            public reportData(request: oracle.v1.IMsgReportData, callback: oracle.v1.Msg.ReportDataCallback): void;

            /**
             * Calls ReportData.
             * @param request MsgReportData message or plain object
             * @returns Promise
             */
            public reportData(request: oracle.v1.IMsgReportData): Promise<oracle.v1.MsgReportDataResponse>;

            /**
             * Calls CreateDataSource.
             * @param request MsgCreateDataSource message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgCreateDataSourceResponse
             */
            public createDataSource(request: oracle.v1.IMsgCreateDataSource, callback: oracle.v1.Msg.CreateDataSourceCallback): void;

            /**
             * Calls CreateDataSource.
             * @param request MsgCreateDataSource message or plain object
             * @returns Promise
             */
            public createDataSource(request: oracle.v1.IMsgCreateDataSource): Promise<oracle.v1.MsgCreateDataSourceResponse>;

            /**
             * Calls EditDataSource.
             * @param request MsgEditDataSource message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgEditDataSourceResponse
             */
            public editDataSource(request: oracle.v1.IMsgEditDataSource, callback: oracle.v1.Msg.EditDataSourceCallback): void;

            /**
             * Calls EditDataSource.
             * @param request MsgEditDataSource message or plain object
             * @returns Promise
             */
            public editDataSource(request: oracle.v1.IMsgEditDataSource): Promise<oracle.v1.MsgEditDataSourceResponse>;

            /**
             * Calls CreateOracleScript.
             * @param request MsgCreateOracleScript message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgCreateOracleScriptResponse
             */
            public createOracleScript(request: oracle.v1.IMsgCreateOracleScript, callback: oracle.v1.Msg.CreateOracleScriptCallback): void;

            /**
             * Calls CreateOracleScript.
             * @param request MsgCreateOracleScript message or plain object
             * @returns Promise
             */
            public createOracleScript(request: oracle.v1.IMsgCreateOracleScript): Promise<oracle.v1.MsgCreateOracleScriptResponse>;

            /**
             * Calls EditOracleScript.
             * @param request MsgEditOracleScript message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgEditOracleScriptResponse
             */
            public editOracleScript(request: oracle.v1.IMsgEditOracleScript, callback: oracle.v1.Msg.EditOracleScriptCallback): void;

            /**
             * Calls EditOracleScript.
             * @param request MsgEditOracleScript message or plain object
             * @returns Promise
             */
            public editOracleScript(request: oracle.v1.IMsgEditOracleScript): Promise<oracle.v1.MsgEditOracleScriptResponse>;

            /**
             * Calls Activate.
             * @param request MsgActivate message or plain object
             * @param callback Node-style callback called with the error, if any, and MsgActivateResponse
             */
            public activate(request: oracle.v1.IMsgActivate, callback: oracle.v1.Msg.ActivateCallback): void;

            /**
             * Calls Activate.
             * @param request MsgActivate message or plain object
             * @returns Promise
             */
            public activate(request: oracle.v1.IMsgActivate): Promise<oracle.v1.MsgActivateResponse>;
        }

        namespace Msg {

            /**
             * Callback as used by {@link oracle.v1.Msg#requestData}.
             * @param error Error, if any
             * @param [response] MsgRequestDataResponse
             */
            type RequestDataCallback = (error: (Error|null), response?: oracle.v1.MsgRequestDataResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Msg#reportData}.
             * @param error Error, if any
             * @param [response] MsgReportDataResponse
             */
            type ReportDataCallback = (error: (Error|null), response?: oracle.v1.MsgReportDataResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Msg#createDataSource}.
             * @param error Error, if any
             * @param [response] MsgCreateDataSourceResponse
             */
            type CreateDataSourceCallback = (error: (Error|null), response?: oracle.v1.MsgCreateDataSourceResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Msg#editDataSource}.
             * @param error Error, if any
             * @param [response] MsgEditDataSourceResponse
             */
            type EditDataSourceCallback = (error: (Error|null), response?: oracle.v1.MsgEditDataSourceResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Msg#createOracleScript}.
             * @param error Error, if any
             * @param [response] MsgCreateOracleScriptResponse
             */
            type CreateOracleScriptCallback = (error: (Error|null), response?: oracle.v1.MsgCreateOracleScriptResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Msg#editOracleScript}.
             * @param error Error, if any
             * @param [response] MsgEditOracleScriptResponse
             */
            type EditOracleScriptCallback = (error: (Error|null), response?: oracle.v1.MsgEditOracleScriptResponse) => void;

            /**
             * Callback as used by {@link oracle.v1.Msg#activate}.
             * @param error Error, if any
             * @param [response] MsgActivateResponse
             */
            type ActivateCallback = (error: (Error|null), response?: oracle.v1.MsgActivateResponse) => void;
        }

        /** Properties of a MsgRequestData. */
        interface IMsgRequestData {

            /** MsgRequestData oracle_script_id */
            oracle_script_id?: (Long|null);

            /** MsgRequestData calldata */
            calldata?: (Uint8Array|null);

            /** MsgRequestData ask_count */
            ask_count?: (Long|null);

            /** MsgRequestData min_count */
            min_count?: (Long|null);

            /** MsgRequestData client_id */
            client_id?: (string|null);

            /** MsgRequestData fee_limit */
            fee_limit?: (cosmos.base.v1beta1.ICoin[]|null);

            /** MsgRequestData prepare_gas */
            prepare_gas?: (Long|null);

            /** MsgRequestData execute_gas */
            execute_gas?: (Long|null);

            /** MsgRequestData sender */
            sender?: (string|null);
        }

        /** Represents a MsgRequestData. */
        class MsgRequestData implements IMsgRequestData {

            /**
             * Constructs a new MsgRequestData.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgRequestData);

            /** MsgRequestData oracle_script_id. */
            public oracle_script_id: Long;

            /** MsgRequestData calldata. */
            public calldata: Uint8Array;

            /** MsgRequestData ask_count. */
            public ask_count: Long;

            /** MsgRequestData min_count. */
            public min_count: Long;

            /** MsgRequestData client_id. */
            public client_id: string;

            /** MsgRequestData fee_limit. */
            public fee_limit: cosmos.base.v1beta1.ICoin[];

            /** MsgRequestData prepare_gas. */
            public prepare_gas: Long;

            /** MsgRequestData execute_gas. */
            public execute_gas: Long;

            /** MsgRequestData sender. */
            public sender: string;

            /**
             * Encodes the specified MsgRequestData message. Does not implicitly {@link oracle.v1.MsgRequestData.verify|verify} messages.
             * @param message MsgRequestData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRequestData message, length delimited. Does not implicitly {@link oracle.v1.MsgRequestData.verify|verify} messages.
             * @param message MsgRequestData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgRequestData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRequestData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRequestData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgRequestData;

            /**
             * Decodes a MsgRequestData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRequestData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgRequestData;

            /**
             * Verifies a MsgRequestData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRequestData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRequestData
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgRequestData;

            /**
             * Creates a plain object from a MsgRequestData message. Also converts values to other types if specified.
             * @param message MsgRequestData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgRequestData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRequestData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgRequestDataResponse. */
        interface IMsgRequestDataResponse {
        }

        /** Represents a MsgRequestDataResponse. */
        class MsgRequestDataResponse implements IMsgRequestDataResponse {

            /**
             * Constructs a new MsgRequestDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgRequestDataResponse);

            /**
             * Encodes the specified MsgRequestDataResponse message. Does not implicitly {@link oracle.v1.MsgRequestDataResponse.verify|verify} messages.
             * @param message MsgRequestDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgRequestDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgRequestDataResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgRequestDataResponse.verify|verify} messages.
             * @param message MsgRequestDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgRequestDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgRequestDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgRequestDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgRequestDataResponse;

            /**
             * Decodes a MsgRequestDataResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgRequestDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgRequestDataResponse;

            /**
             * Verifies a MsgRequestDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgRequestDataResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgRequestDataResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgRequestDataResponse;

            /**
             * Creates a plain object from a MsgRequestDataResponse message. Also converts values to other types if specified.
             * @param message MsgRequestDataResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgRequestDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgRequestDataResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgReportData. */
        interface IMsgReportData {

            /** MsgReportData request_id */
            request_id?: (Long|null);

            /** MsgReportData raw_reports */
            raw_reports?: (oracle.v1.IRawReport[]|null);

            /** MsgReportData validator */
            validator?: (string|null);
        }

        /** Represents a MsgReportData. */
        class MsgReportData implements IMsgReportData {

            /**
             * Constructs a new MsgReportData.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgReportData);

            /** MsgReportData request_id. */
            public request_id: Long;

            /** MsgReportData raw_reports. */
            public raw_reports: oracle.v1.IRawReport[];

            /** MsgReportData validator. */
            public validator: string;

            /**
             * Encodes the specified MsgReportData message. Does not implicitly {@link oracle.v1.MsgReportData.verify|verify} messages.
             * @param message MsgReportData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgReportData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgReportData message, length delimited. Does not implicitly {@link oracle.v1.MsgReportData.verify|verify} messages.
             * @param message MsgReportData message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgReportData, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgReportData message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgReportData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgReportData;

            /**
             * Decodes a MsgReportData message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgReportData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgReportData;

            /**
             * Verifies a MsgReportData message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgReportData message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgReportData
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgReportData;

            /**
             * Creates a plain object from a MsgReportData message. Also converts values to other types if specified.
             * @param message MsgReportData
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgReportData, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgReportData to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgReportDataResponse. */
        interface IMsgReportDataResponse {
        }

        /** Represents a MsgReportDataResponse. */
        class MsgReportDataResponse implements IMsgReportDataResponse {

            /**
             * Constructs a new MsgReportDataResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgReportDataResponse);

            /**
             * Encodes the specified MsgReportDataResponse message. Does not implicitly {@link oracle.v1.MsgReportDataResponse.verify|verify} messages.
             * @param message MsgReportDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgReportDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgReportDataResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgReportDataResponse.verify|verify} messages.
             * @param message MsgReportDataResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgReportDataResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgReportDataResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgReportDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgReportDataResponse;

            /**
             * Decodes a MsgReportDataResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgReportDataResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgReportDataResponse;

            /**
             * Verifies a MsgReportDataResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgReportDataResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgReportDataResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgReportDataResponse;

            /**
             * Creates a plain object from a MsgReportDataResponse message. Also converts values to other types if specified.
             * @param message MsgReportDataResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgReportDataResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgReportDataResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCreateDataSource. */
        interface IMsgCreateDataSource {

            /** MsgCreateDataSource name */
            name?: (string|null);

            /** MsgCreateDataSource description */
            description?: (string|null);

            /** MsgCreateDataSource executable */
            executable?: (Uint8Array|null);

            /** MsgCreateDataSource fee */
            fee?: (cosmos.base.v1beta1.ICoin[]|null);

            /** MsgCreateDataSource treasury */
            treasury?: (string|null);

            /** MsgCreateDataSource owner */
            owner?: (string|null);

            /** MsgCreateDataSource sender */
            sender?: (string|null);
        }

        /** Represents a MsgCreateDataSource. */
        class MsgCreateDataSource implements IMsgCreateDataSource {

            /**
             * Constructs a new MsgCreateDataSource.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgCreateDataSource);

            /** MsgCreateDataSource name. */
            public name: string;

            /** MsgCreateDataSource description. */
            public description: string;

            /** MsgCreateDataSource executable. */
            public executable: Uint8Array;

            /** MsgCreateDataSource fee. */
            public fee: cosmos.base.v1beta1.ICoin[];

            /** MsgCreateDataSource treasury. */
            public treasury: string;

            /** MsgCreateDataSource owner. */
            public owner: string;

            /** MsgCreateDataSource sender. */
            public sender: string;

            /**
             * Encodes the specified MsgCreateDataSource message. Does not implicitly {@link oracle.v1.MsgCreateDataSource.verify|verify} messages.
             * @param message MsgCreateDataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgCreateDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCreateDataSource message, length delimited. Does not implicitly {@link oracle.v1.MsgCreateDataSource.verify|verify} messages.
             * @param message MsgCreateDataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgCreateDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCreateDataSource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCreateDataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgCreateDataSource;

            /**
             * Decodes a MsgCreateDataSource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCreateDataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgCreateDataSource;

            /**
             * Verifies a MsgCreateDataSource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCreateDataSource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCreateDataSource
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgCreateDataSource;

            /**
             * Creates a plain object from a MsgCreateDataSource message. Also converts values to other types if specified.
             * @param message MsgCreateDataSource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgCreateDataSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCreateDataSource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCreateDataSourceResponse. */
        interface IMsgCreateDataSourceResponse {
        }

        /** Represents a MsgCreateDataSourceResponse. */
        class MsgCreateDataSourceResponse implements IMsgCreateDataSourceResponse {

            /**
             * Constructs a new MsgCreateDataSourceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgCreateDataSourceResponse);

            /**
             * Encodes the specified MsgCreateDataSourceResponse message. Does not implicitly {@link oracle.v1.MsgCreateDataSourceResponse.verify|verify} messages.
             * @param message MsgCreateDataSourceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgCreateDataSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCreateDataSourceResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgCreateDataSourceResponse.verify|verify} messages.
             * @param message MsgCreateDataSourceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgCreateDataSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCreateDataSourceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCreateDataSourceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgCreateDataSourceResponse;

            /**
             * Decodes a MsgCreateDataSourceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCreateDataSourceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgCreateDataSourceResponse;

            /**
             * Verifies a MsgCreateDataSourceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCreateDataSourceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCreateDataSourceResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgCreateDataSourceResponse;

            /**
             * Creates a plain object from a MsgCreateDataSourceResponse message. Also converts values to other types if specified.
             * @param message MsgCreateDataSourceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgCreateDataSourceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCreateDataSourceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgEditDataSource. */
        interface IMsgEditDataSource {

            /** MsgEditDataSource data_source_id */
            data_source_id?: (Long|null);

            /** MsgEditDataSource name */
            name?: (string|null);

            /** MsgEditDataSource description */
            description?: (string|null);

            /** MsgEditDataSource executable */
            executable?: (Uint8Array|null);

            /** MsgEditDataSource fee */
            fee?: (cosmos.base.v1beta1.ICoin[]|null);

            /** MsgEditDataSource treasury */
            treasury?: (string|null);

            /** MsgEditDataSource owner */
            owner?: (string|null);

            /** MsgEditDataSource sender */
            sender?: (string|null);
        }

        /** Represents a MsgEditDataSource. */
        class MsgEditDataSource implements IMsgEditDataSource {

            /**
             * Constructs a new MsgEditDataSource.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgEditDataSource);

            /** MsgEditDataSource data_source_id. */
            public data_source_id: Long;

            /** MsgEditDataSource name. */
            public name: string;

            /** MsgEditDataSource description. */
            public description: string;

            /** MsgEditDataSource executable. */
            public executable: Uint8Array;

            /** MsgEditDataSource fee. */
            public fee: cosmos.base.v1beta1.ICoin[];

            /** MsgEditDataSource treasury. */
            public treasury: string;

            /** MsgEditDataSource owner. */
            public owner: string;

            /** MsgEditDataSource sender. */
            public sender: string;

            /**
             * Encodes the specified MsgEditDataSource message. Does not implicitly {@link oracle.v1.MsgEditDataSource.verify|verify} messages.
             * @param message MsgEditDataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgEditDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgEditDataSource message, length delimited. Does not implicitly {@link oracle.v1.MsgEditDataSource.verify|verify} messages.
             * @param message MsgEditDataSource message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgEditDataSource, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgEditDataSource message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEditDataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgEditDataSource;

            /**
             * Decodes a MsgEditDataSource message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgEditDataSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgEditDataSource;

            /**
             * Verifies a MsgEditDataSource message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgEditDataSource message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgEditDataSource
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgEditDataSource;

            /**
             * Creates a plain object from a MsgEditDataSource message. Also converts values to other types if specified.
             * @param message MsgEditDataSource
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgEditDataSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgEditDataSource to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgEditDataSourceResponse. */
        interface IMsgEditDataSourceResponse {
        }

        /** Represents a MsgEditDataSourceResponse. */
        class MsgEditDataSourceResponse implements IMsgEditDataSourceResponse {

            /**
             * Constructs a new MsgEditDataSourceResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgEditDataSourceResponse);

            /**
             * Encodes the specified MsgEditDataSourceResponse message. Does not implicitly {@link oracle.v1.MsgEditDataSourceResponse.verify|verify} messages.
             * @param message MsgEditDataSourceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgEditDataSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgEditDataSourceResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgEditDataSourceResponse.verify|verify} messages.
             * @param message MsgEditDataSourceResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgEditDataSourceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgEditDataSourceResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEditDataSourceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgEditDataSourceResponse;

            /**
             * Decodes a MsgEditDataSourceResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgEditDataSourceResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgEditDataSourceResponse;

            /**
             * Verifies a MsgEditDataSourceResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgEditDataSourceResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgEditDataSourceResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgEditDataSourceResponse;

            /**
             * Creates a plain object from a MsgEditDataSourceResponse message. Also converts values to other types if specified.
             * @param message MsgEditDataSourceResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgEditDataSourceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgEditDataSourceResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCreateOracleScript. */
        interface IMsgCreateOracleScript {

            /** MsgCreateOracleScript name */
            name?: (string|null);

            /** MsgCreateOracleScript description */
            description?: (string|null);

            /** MsgCreateOracleScript schema */
            schema?: (string|null);

            /** MsgCreateOracleScript source_code_url */
            source_code_url?: (string|null);

            /** MsgCreateOracleScript code */
            code?: (Uint8Array|null);

            /** MsgCreateOracleScript owner */
            owner?: (string|null);

            /** MsgCreateOracleScript sender */
            sender?: (string|null);
        }

        /** Represents a MsgCreateOracleScript. */
        class MsgCreateOracleScript implements IMsgCreateOracleScript {

            /**
             * Constructs a new MsgCreateOracleScript.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgCreateOracleScript);

            /** MsgCreateOracleScript name. */
            public name: string;

            /** MsgCreateOracleScript description. */
            public description: string;

            /** MsgCreateOracleScript schema. */
            public schema: string;

            /** MsgCreateOracleScript source_code_url. */
            public source_code_url: string;

            /** MsgCreateOracleScript code. */
            public code: Uint8Array;

            /** MsgCreateOracleScript owner. */
            public owner: string;

            /** MsgCreateOracleScript sender. */
            public sender: string;

            /**
             * Encodes the specified MsgCreateOracleScript message. Does not implicitly {@link oracle.v1.MsgCreateOracleScript.verify|verify} messages.
             * @param message MsgCreateOracleScript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgCreateOracleScript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCreateOracleScript message, length delimited. Does not implicitly {@link oracle.v1.MsgCreateOracleScript.verify|verify} messages.
             * @param message MsgCreateOracleScript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgCreateOracleScript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCreateOracleScript message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCreateOracleScript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgCreateOracleScript;

            /**
             * Decodes a MsgCreateOracleScript message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCreateOracleScript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgCreateOracleScript;

            /**
             * Verifies a MsgCreateOracleScript message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCreateOracleScript message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCreateOracleScript
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgCreateOracleScript;

            /**
             * Creates a plain object from a MsgCreateOracleScript message. Also converts values to other types if specified.
             * @param message MsgCreateOracleScript
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgCreateOracleScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCreateOracleScript to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgCreateOracleScriptResponse. */
        interface IMsgCreateOracleScriptResponse {
        }

        /** Represents a MsgCreateOracleScriptResponse. */
        class MsgCreateOracleScriptResponse implements IMsgCreateOracleScriptResponse {

            /**
             * Constructs a new MsgCreateOracleScriptResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgCreateOracleScriptResponse);

            /**
             * Encodes the specified MsgCreateOracleScriptResponse message. Does not implicitly {@link oracle.v1.MsgCreateOracleScriptResponse.verify|verify} messages.
             * @param message MsgCreateOracleScriptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgCreateOracleScriptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgCreateOracleScriptResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgCreateOracleScriptResponse.verify|verify} messages.
             * @param message MsgCreateOracleScriptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgCreateOracleScriptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgCreateOracleScriptResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgCreateOracleScriptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgCreateOracleScriptResponse;

            /**
             * Decodes a MsgCreateOracleScriptResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgCreateOracleScriptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgCreateOracleScriptResponse;

            /**
             * Verifies a MsgCreateOracleScriptResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgCreateOracleScriptResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgCreateOracleScriptResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgCreateOracleScriptResponse;

            /**
             * Creates a plain object from a MsgCreateOracleScriptResponse message. Also converts values to other types if specified.
             * @param message MsgCreateOracleScriptResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgCreateOracleScriptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgCreateOracleScriptResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgEditOracleScript. */
        interface IMsgEditOracleScript {

            /** MsgEditOracleScript oracle_script_id */
            oracle_script_id?: (Long|null);

            /** MsgEditOracleScript name */
            name?: (string|null);

            /** MsgEditOracleScript description */
            description?: (string|null);

            /** MsgEditOracleScript schema */
            schema?: (string|null);

            /** MsgEditOracleScript source_code_url */
            source_code_url?: (string|null);

            /** MsgEditOracleScript code */
            code?: (Uint8Array|null);

            /** MsgEditOracleScript owner */
            owner?: (string|null);

            /** MsgEditOracleScript sender */
            sender?: (string|null);
        }

        /** Represents a MsgEditOracleScript. */
        class MsgEditOracleScript implements IMsgEditOracleScript {

            /**
             * Constructs a new MsgEditOracleScript.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgEditOracleScript);

            /** MsgEditOracleScript oracle_script_id. */
            public oracle_script_id: Long;

            /** MsgEditOracleScript name. */
            public name: string;

            /** MsgEditOracleScript description. */
            public description: string;

            /** MsgEditOracleScript schema. */
            public schema: string;

            /** MsgEditOracleScript source_code_url. */
            public source_code_url: string;

            /** MsgEditOracleScript code. */
            public code: Uint8Array;

            /** MsgEditOracleScript owner. */
            public owner: string;

            /** MsgEditOracleScript sender. */
            public sender: string;

            /**
             * Encodes the specified MsgEditOracleScript message. Does not implicitly {@link oracle.v1.MsgEditOracleScript.verify|verify} messages.
             * @param message MsgEditOracleScript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgEditOracleScript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgEditOracleScript message, length delimited. Does not implicitly {@link oracle.v1.MsgEditOracleScript.verify|verify} messages.
             * @param message MsgEditOracleScript message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgEditOracleScript, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgEditOracleScript message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEditOracleScript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgEditOracleScript;

            /**
             * Decodes a MsgEditOracleScript message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgEditOracleScript
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgEditOracleScript;

            /**
             * Verifies a MsgEditOracleScript message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgEditOracleScript message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgEditOracleScript
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgEditOracleScript;

            /**
             * Creates a plain object from a MsgEditOracleScript message. Also converts values to other types if specified.
             * @param message MsgEditOracleScript
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgEditOracleScript, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgEditOracleScript to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgEditOracleScriptResponse. */
        interface IMsgEditOracleScriptResponse {
        }

        /** Represents a MsgEditOracleScriptResponse. */
        class MsgEditOracleScriptResponse implements IMsgEditOracleScriptResponse {

            /**
             * Constructs a new MsgEditOracleScriptResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgEditOracleScriptResponse);

            /**
             * Encodes the specified MsgEditOracleScriptResponse message. Does not implicitly {@link oracle.v1.MsgEditOracleScriptResponse.verify|verify} messages.
             * @param message MsgEditOracleScriptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgEditOracleScriptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgEditOracleScriptResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgEditOracleScriptResponse.verify|verify} messages.
             * @param message MsgEditOracleScriptResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgEditOracleScriptResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgEditOracleScriptResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgEditOracleScriptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgEditOracleScriptResponse;

            /**
             * Decodes a MsgEditOracleScriptResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgEditOracleScriptResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgEditOracleScriptResponse;

            /**
             * Verifies a MsgEditOracleScriptResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgEditOracleScriptResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgEditOracleScriptResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgEditOracleScriptResponse;

            /**
             * Creates a plain object from a MsgEditOracleScriptResponse message. Also converts values to other types if specified.
             * @param message MsgEditOracleScriptResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgEditOracleScriptResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgEditOracleScriptResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgActivate. */
        interface IMsgActivate {

            /** MsgActivate validator */
            validator?: (string|null);
        }

        /** Represents a MsgActivate. */
        class MsgActivate implements IMsgActivate {

            /**
             * Constructs a new MsgActivate.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgActivate);

            /** MsgActivate validator. */
            public validator: string;

            /**
             * Encodes the specified MsgActivate message. Does not implicitly {@link oracle.v1.MsgActivate.verify|verify} messages.
             * @param message MsgActivate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgActivate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgActivate message, length delimited. Does not implicitly {@link oracle.v1.MsgActivate.verify|verify} messages.
             * @param message MsgActivate message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgActivate, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgActivate message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgActivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgActivate;

            /**
             * Decodes a MsgActivate message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgActivate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgActivate;

            /**
             * Verifies a MsgActivate message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgActivate message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgActivate
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgActivate;

            /**
             * Creates a plain object from a MsgActivate message. Also converts values to other types if specified.
             * @param message MsgActivate
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgActivate, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgActivate to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MsgActivateResponse. */
        interface IMsgActivateResponse {
        }

        /** Represents a MsgActivateResponse. */
        class MsgActivateResponse implements IMsgActivateResponse {

            /**
             * Constructs a new MsgActivateResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IMsgActivateResponse);

            /**
             * Encodes the specified MsgActivateResponse message. Does not implicitly {@link oracle.v1.MsgActivateResponse.verify|verify} messages.
             * @param message MsgActivateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IMsgActivateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MsgActivateResponse message, length delimited. Does not implicitly {@link oracle.v1.MsgActivateResponse.verify|verify} messages.
             * @param message MsgActivateResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IMsgActivateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MsgActivateResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MsgActivateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.MsgActivateResponse;

            /**
             * Decodes a MsgActivateResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MsgActivateResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.MsgActivateResponse;

            /**
             * Verifies a MsgActivateResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MsgActivateResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MsgActivateResponse
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.MsgActivateResponse;

            /**
             * Creates a plain object from a MsgActivateResponse message. Also converts values to other types if specified.
             * @param message MsgActivateResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.MsgActivateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MsgActivateResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GenesisState. */
        interface IGenesisState {

            /** GenesisState params */
            params?: (oracle.v1.IParams|null);

            /** GenesisState data_sources */
            data_sources?: (oracle.v1.IDataSource[]|null);

            /** GenesisState oracle_scripts */
            oracle_scripts?: (oracle.v1.IOracleScript[]|null);
        }

        /** Represents a GenesisState. */
        class GenesisState implements IGenesisState {

            /**
             * Constructs a new GenesisState.
             * @param [properties] Properties to set
             */
            constructor(properties?: oracle.v1.IGenesisState);

            /** GenesisState params. */
            public params?: (oracle.v1.IParams|null);

            /** GenesisState data_sources. */
            public data_sources: oracle.v1.IDataSource[];

            /** GenesisState oracle_scripts. */
            public oracle_scripts: oracle.v1.IOracleScript[];

            /**
             * Encodes the specified GenesisState message. Does not implicitly {@link oracle.v1.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: oracle.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GenesisState message, length delimited. Does not implicitly {@link oracle.v1.GenesisState.verify|verify} messages.
             * @param message GenesisState message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: oracle.v1.IGenesisState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GenesisState message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): oracle.v1.GenesisState;

            /**
             * Decodes a GenesisState message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GenesisState
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): oracle.v1.GenesisState;

            /**
             * Verifies a GenesisState message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GenesisState message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GenesisState
             */
            public static fromObject(object: { [k: string]: any }): oracle.v1.GenesisState;

            /**
             * Creates a plain object from a GenesisState message. Also converts values to other types if specified.
             * @param message GenesisState
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: oracle.v1.GenesisState, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GenesisState to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto public_dependency */
            public_dependency?: (number[]|null);

            /** FileDescriptorProto weak_dependency */
            weak_dependency?: (number[]|null);

            /** FileDescriptorProto message_type */
            message_type?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info */
            source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto public_dependency. */
            public public_dependency: number[];

            /** FileDescriptorProto weak_dependency. */
            public weak_dependency: number[];

            /** FileDescriptorProto message_type. */
            public message_type: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto source_code_info. */
            public source_code_info?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nested_type */
            nested_type?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enum_type */
            enum_type?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extension_range */
            extension_range?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneof_decl */
            oneof_decl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range */
            reserved_range?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reserved_name */
            reserved_name?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nested_type. */
            public nested_type: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enum_type. */
            public enum_type: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extension_range. */
            public extension_range: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneof_decl. */
            public oneof_decl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reserved_range. */
            public reserved_range: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reserved_name. */
            public reserved_name: string[];

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto type_name */
            type_name?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto default_value */
            default_value?: (string|null);

            /** FieldDescriptorProto oneof_index */
            oneof_index?: (number|null);

            /** FieldDescriptorProto json_name */
            json_name?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto type_name. */
            public type_name: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto default_value. */
            public default_value: string;

            /** FieldDescriptorProto oneof_index. */
            public oneof_index: number;

            /** FieldDescriptorProto json_name. */
            public json_name: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto input_type */
            input_type?: (string|null);

            /** MethodDescriptorProto output_type */
            output_type?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming */
            client_streaming?: (boolean|null);

            /** MethodDescriptorProto server_streaming */
            server_streaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto input_type. */
            public input_type: string;

            /** MethodDescriptorProto output_type. */
            public output_type: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto client_streaming. */
            public client_streaming: boolean;

            /** MethodDescriptorProto server_streaming. */
            public server_streaming: boolean;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions java_package */
            java_package?: (string|null);

            /** FileOptions java_outer_classname */
            java_outer_classname?: (string|null);

            /** FileOptions java_multiple_files */
            java_multiple_files?: (boolean|null);

            /** FileOptions java_generate_equals_and_hash */
            java_generate_equals_and_hash?: (boolean|null);

            /** FileOptions java_string_check_utf8 */
            java_string_check_utf8?: (boolean|null);

            /** FileOptions optimize_for */
            optimize_for?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions go_package */
            go_package?: (string|null);

            /** FileOptions cc_generic_services */
            cc_generic_services?: (boolean|null);

            /** FileOptions java_generic_services */
            java_generic_services?: (boolean|null);

            /** FileOptions py_generic_services */
            py_generic_services?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions cc_enable_arenas */
            cc_enable_arenas?: (boolean|null);

            /** FileOptions objc_class_prefix */
            objc_class_prefix?: (string|null);

            /** FileOptions csharp_namespace */
            csharp_namespace?: (string|null);

            /** FileOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goproto_getters_all */
            ".gogoproto.goproto_getters_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_prefix_all */
            ".gogoproto.goproto_enum_prefix_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_stringer_all */
            ".gogoproto.goproto_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.verbose_equal_all */
            ".gogoproto.verbose_equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.face_all */
            ".gogoproto.face_all"?: (boolean|null);

            /** FileOptions .gogoproto.gostring_all */
            ".gogoproto.gostring_all"?: (boolean|null);

            /** FileOptions .gogoproto.populate_all */
            ".gogoproto.populate_all"?: (boolean|null);

            /** FileOptions .gogoproto.stringer_all */
            ".gogoproto.stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.onlyone_all */
            ".gogoproto.onlyone_all"?: (boolean|null);

            /** FileOptions .gogoproto.equal_all */
            ".gogoproto.equal_all"?: (boolean|null);

            /** FileOptions .gogoproto.description_all */
            ".gogoproto.description_all"?: (boolean|null);

            /** FileOptions .gogoproto.testgen_all */
            ".gogoproto.testgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.benchgen_all */
            ".gogoproto.benchgen_all"?: (boolean|null);

            /** FileOptions .gogoproto.marshaler_all */
            ".gogoproto.marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshaler_all */
            ".gogoproto.unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.stable_marshaler_all */
            ".gogoproto.stable_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.sizer_all */
            ".gogoproto.sizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_enum_stringer_all */
            ".gogoproto.goproto_enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.enum_stringer_all */
            ".gogoproto.enum_stringer_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_marshaler_all */
            ".gogoproto.unsafe_marshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.unsafe_unmarshaler_all */
            ".gogoproto.unsafe_unmarshaler_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_extensions_map_all */
            ".gogoproto.goproto_extensions_map_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unrecognized_all */
            ".gogoproto.goproto_unrecognized_all"?: (boolean|null);

            /** FileOptions .gogoproto.gogoproto_import */
            ".gogoproto.gogoproto_import"?: (boolean|null);

            /** FileOptions .gogoproto.protosizer_all */
            ".gogoproto.protosizer_all"?: (boolean|null);

            /** FileOptions .gogoproto.compare_all */
            ".gogoproto.compare_all"?: (boolean|null);

            /** FileOptions .gogoproto.typedecl_all */
            ".gogoproto.typedecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.enumdecl_all */
            ".gogoproto.enumdecl_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_registration */
            ".gogoproto.goproto_registration"?: (boolean|null);

            /** FileOptions .gogoproto.messagename_all */
            ".gogoproto.messagename_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_sizecache_all */
            ".gogoproto.goproto_sizecache_all"?: (boolean|null);

            /** FileOptions .gogoproto.goproto_unkeyed_all */
            ".gogoproto.goproto_unkeyed_all"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions java_package. */
            public java_package: string;

            /** FileOptions java_outer_classname. */
            public java_outer_classname: string;

            /** FileOptions java_multiple_files. */
            public java_multiple_files: boolean;

            /** FileOptions java_generate_equals_and_hash. */
            public java_generate_equals_and_hash: boolean;

            /** FileOptions java_string_check_utf8. */
            public java_string_check_utf8: boolean;

            /** FileOptions optimize_for. */
            public optimize_for: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions go_package. */
            public go_package: string;

            /** FileOptions cc_generic_services. */
            public cc_generic_services: boolean;

            /** FileOptions java_generic_services. */
            public java_generic_services: boolean;

            /** FileOptions py_generic_services. */
            public py_generic_services: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions cc_enable_arenas. */
            public cc_enable_arenas: boolean;

            /** FileOptions objc_class_prefix. */
            public objc_class_prefix: string;

            /** FileOptions csharp_namespace. */
            public csharp_namespace: string;

            /** FileOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions message_set_wire_format */
            message_set_wire_format?: (boolean|null);

            /** MessageOptions no_standard_descriptor_accessor */
            no_standard_descriptor_accessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions map_entry */
            map_entry?: (boolean|null);

            /** MessageOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .gogoproto.goproto_getters */
            ".gogoproto.goproto_getters"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_stringer */
            ".gogoproto.goproto_stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verbose_equal */
            ".gogoproto.verbose_equal"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stable_marshaler */
            ".gogoproto.stable_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_marshaler */
            ".gogoproto.unsafe_marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafe_unmarshaler */
            ".gogoproto.unsafe_unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_extensions_map */
            ".gogoproto.goproto_extensions_map"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unrecognized */
            ".gogoproto.goproto_unrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_sizecache */
            ".gogoproto.goproto_sizecache"?: (boolean|null);

            /** MessageOptions .gogoproto.goproto_unkeyed */
            ".gogoproto.goproto_unkeyed"?: (boolean|null);

            /** MessageOptions .cosmos_proto.interface_type */
            ".cosmos_proto.interface_type"?: (string|null);

            /** MessageOptions .cosmos_proto.implements_interface */
            ".cosmos_proto.implements_interface"?: (string|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions message_set_wire_format. */
            public message_set_wire_format: boolean;

            /** MessageOptions no_standard_descriptor_accessor. */
            public no_standard_descriptor_accessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions map_entry. */
            public map_entry: boolean;

            /** MessageOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);

            /** FieldOptions .gogoproto.wktpointer */
            ".gogoproto.wktpointer"?: (boolean|null);

            /** FieldOptions .gogoproto.castrepeated */
            ".gogoproto.castrepeated"?: (string|null);

            /** FieldOptions .cosmos_proto.accepts_interface */
            ".cosmos_proto.accepts_interface"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allow_alias */
            allow_alias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goproto_enum_prefix */
            ".gogoproto.goproto_enum_prefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goproto_enum_stringer */
            ".gogoproto.goproto_enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_stringer */
            ".gogoproto.enum_stringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enum_customname */
            ".gogoproto.enum_customname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allow_alias. */
            public allow_alias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalue_customname */
            ".gogoproto.enumvalue_customname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpreted_option */
            uninterpreted_option?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpreted_option. */
            public uninterpreted_option: google.protobuf.IUninterpretedOption[];

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifier_value */
            identifier_value?: (string|null);

            /** UninterpretedOption positive_int_value */
            positive_int_value?: (Long|null);

            /** UninterpretedOption negative_int_value */
            negative_int_value?: (Long|null);

            /** UninterpretedOption double_value */
            double_value?: (number|null);

            /** UninterpretedOption string_value */
            string_value?: (Uint8Array|null);

            /** UninterpretedOption aggregate_value */
            aggregate_value?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifier_value. */
            public identifier_value: string;

            /** UninterpretedOption positive_int_value. */
            public positive_int_value: Long;

            /** UninterpretedOption negative_int_value. */
            public negative_int_value: Long;

            /** UninterpretedOption double_value. */
            public double_value: number;

            /** UninterpretedOption string_value. */
            public string_value: Uint8Array;

            /** UninterpretedOption aggregate_value. */
            public aggregate_value: string;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart name_part */
                name_part: string;

                /** NamePart is_extension */
                is_extension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart name_part. */
                public name_part: string;

                /** NamePart is_extension. */
                public is_extension: boolean;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leading_comments */
                leading_comments?: (string|null);

                /** Location trailing_comments */
                trailing_comments?: (string|null);

                /** Location leading_detached_comments */
                leading_detached_comments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leading_comments. */
                public leading_comments: string;

                /** Location trailing_comments. */
                public trailing_comments: string;

                /** Location leading_detached_comments. */
                public leading_detached_comments: string[];

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation source_file */
                source_file?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation source_file. */
                public source_file: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: Long;

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fully_decode_reserved_expansion */
            fully_decode_reserved_expansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fully_decode_reserved_expansion. */
            public fully_decode_reserved_expansion: boolean;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule response_body */
            response_body?: (string|null);

            /** HttpRule additional_bindings */
            additional_bindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule response_body. */
            public response_body: string;

            /** HttpRule additional_bindings. */
            public additional_bindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace cosmos. */
export namespace cosmos {

    /** Namespace base. */
    namespace base {

        /** Namespace v1beta1. */
        namespace v1beta1 {

            /** Properties of a Coin. */
            interface ICoin {

                /** Coin denom */
                denom?: (string|null);

                /** Coin amount */
                amount?: (string|null);
            }

            /** Represents a Coin. */
            class Coin implements ICoin {

                /**
                 * Constructs a new Coin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.ICoin);

                /** Coin denom. */
                public denom: string;

                /** Coin amount. */
                public amount: string;

                /**
                 * Encodes the specified Coin message. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Coin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.Coin.verify|verify} messages.
                 * @param message Coin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.ICoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Coin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.Coin;

                /**
                 * Decodes a Coin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Coin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.Coin;

                /**
                 * Verifies a Coin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Coin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Coin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.Coin;

                /**
                 * Creates a plain object from a Coin message. Also converts values to other types if specified.
                 * @param message Coin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.Coin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Coin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecCoin. */
            interface IDecCoin {

                /** DecCoin denom */
                denom?: (string|null);

                /** DecCoin amount */
                amount?: (string|null);
            }

            /** Represents a DecCoin. */
            class DecCoin implements IDecCoin {

                /**
                 * Constructs a new DecCoin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecCoin);

                /** DecCoin denom. */
                public denom: string;

                /** DecCoin amount. */
                public amount: string;

                /**
                 * Encodes the specified DecCoin message. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecCoin message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecCoin.verify|verify} messages.
                 * @param message DecCoin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecCoin, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecCoin;

                /**
                 * Decodes a DecCoin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecCoin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecCoin;

                /**
                 * Verifies a DecCoin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecCoin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecCoin
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecCoin;

                /**
                 * Creates a plain object from a DecCoin message. Also converts values to other types if specified.
                 * @param message DecCoin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecCoin, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecCoin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an IntProto. */
            interface IIntProto {

                /** IntProto int */
                int?: (string|null);
            }

            /** Represents an IntProto. */
            class IntProto implements IIntProto {

                /**
                 * Constructs a new IntProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IIntProto);

                /** IntProto int. */
                public int: string;

                /**
                 * Encodes the specified IntProto message. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified IntProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.IntProto.verify|verify} messages.
                 * @param message IntProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IIntProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an IntProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.IntProto;

                /**
                 * Decodes an IntProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns IntProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.IntProto;

                /**
                 * Verifies an IntProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an IntProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns IntProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.IntProto;

                /**
                 * Creates a plain object from an IntProto message. Also converts values to other types if specified.
                 * @param message IntProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.IntProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this IntProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a DecProto. */
            interface IDecProto {

                /** DecProto dec */
                dec?: (string|null);
            }

            /** Represents a DecProto. */
            class DecProto implements IDecProto {

                /**
                 * Constructs a new DecProto.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: cosmos.base.v1beta1.IDecProto);

                /** DecProto dec. */
                public dec: string;

                /**
                 * Encodes the specified DecProto message. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified DecProto message, length delimited. Does not implicitly {@link cosmos.base.v1beta1.DecProto.verify|verify} messages.
                 * @param message DecProto message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: cosmos.base.v1beta1.IDecProto, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a DecProto message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): cosmos.base.v1beta1.DecProto;

                /**
                 * Decodes a DecProto message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns DecProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): cosmos.base.v1beta1.DecProto;

                /**
                 * Verifies a DecProto message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a DecProto message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns DecProto
                 */
                public static fromObject(object: { [k: string]: any }): cosmos.base.v1beta1.DecProto;

                /**
                 * Creates a plain object from a DecProto message. Also converts values to other types if specified.
                 * @param message DecProto
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: cosmos.base.v1beta1.DecProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this DecProto to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
