import { oracle } from '../../proto';
import { cosmosclient } from '@cosmos-client/core';

export * as oracle from './module';

cosmosclient.codec.register('/oracle.v1.MsgRequestData', oracle.v1.MsgRequestData);
cosmosclient.codec.register('/oracle.v1.MsgReportData', oracle.v1.MsgReportData);
cosmosclient.codec.register('/oracle.v1.MsgCreateDataSource', oracle.v1.MsgCreateDataSource);
cosmosclient.codec.register('/oracle.v1.MsgEditDataSource', oracle.v1.MsgEditDataSource);
cosmosclient.codec.register('/oracle.v1.MsgCreateOracleScript', oracle.v1.MsgCreateOracleScript);
cosmosclient.codec.register('/oracle.v1.MsgEditOracleScript', oracle.v1.MsgEditOracleScript);
cosmosclient.codec.register('/oracle.v1.MsgActivate', oracle.v1.MsgActivate);
