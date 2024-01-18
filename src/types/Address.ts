import { getAddress, isAddress } from 'viem'
import { z } from 'zod'

/** 
 * Validator for valid Ethereum {@link Address}
 */
export const zAddress = z.string().refine(isAddress).transform(address => getAddress(address)).describe('Valid Ethereum address')

/**
 * Valid Ethereum address
 */
export type Address = z.infer<typeof zAddress>