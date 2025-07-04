// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const DispatcherModule = buildModule("DispatcherModule", (m) => {
  const dispatcher = m.contract("Dispatcher", []);

  return { dispatcher };
});

export default DispatcherModule;